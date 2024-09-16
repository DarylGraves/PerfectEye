import sys
import os
import bpy

#####################################################
# Functions
#####################################################
def delete_cube():
    print("Deleting default cube...")
    if "Cube" in bpy.data.objects:
        bpy.data.objects["Cube"].select_set(True)
        bpy.ops.object.delete()
        print("Cube deleted.")
    else:
        print("No default cube found.")
        
def load_obj_files(path):
    print(f"Loading all .obj files from path: {path}")
    # Check if the path is valid
    if not os.path.isdir(path):
        print(f"Error: The provided path {path} is not valid.")
    else:
        # Get all .obj files in the directory
        obj_files = [f for f in os.listdir(path) if f.endswith('.obj')]
        
        if len(obj_files) == 0:
            print(f"No .obj files found in directory: {path}")
        else:
            # Import each .obj file into Blender
            for obj_file in obj_files:
                obj_path = os.path.join(path, obj_file)
                print(f"Importing {obj_file} into Blender.")
                bpy.ops.wm.obj_import(filepath=obj_path)

            print(f"Successfully imported {len(obj_files)} .obj files.")

def spiro_magic():
    # Make sure we are in object mode
    bpy.ops.object.mode_set(mode='OBJECT')

    clearNormals = False

    # Iterate over all selected objects
    for obj in bpy.context.selected_objects:
        # Only proceed if the object is a mesh with materials
        if obj.type == 'MESH' and obj.data.materials:
            if clearNormals:
                # Backward compatibility: Check if 'use_auto_smooth' attribute exists before accessing it
                if hasattr(obj.data, 'use_auto_smooth'):
                    obj.data.use_auto_smooth = False  # Disable auto smoothing
                
                # Geometry Nodes for smoothing in newer versions of Blender
                if not hasattr(obj.data, 'use_auto_smooth'):  # Only if use_auto_smooth is not present
                    bpy.context.view_layer.objects.active = obj
                    bpy.ops.object.modifier_add(type='NODES')  # Add Geometry Nodes modifier

                    # Assign the "Smooth by Angle" node group from Essentials
                    modifier = obj.modifiers[-1]  # Access the newly added Geometry Nodes modifier
                    bpy.ops.object.modifier_add_node_group(
                        asset_library_type='ESSENTIALS', 
                        relative_asset_identifier="geometry_nodes/smooth_by_angle.blend/NodeTree/Smooth by Angle"
                    )
                
                # Clear custom split normals if they exist
                if obj.data.has_custom_normals:
                    bpy.ops.object.mode_set(mode='EDIT')  # Switch to edit mode
                    bpy.ops.mesh.customdata_custom_splitnormals_clear()  # Clear custom split normals
                    bpy.ops.object.mode_set(mode='OBJECT')  # Switch back to object mode
        
            # Iterate over all materials of the object
            for mat in obj.data.materials:
                # Proceed only if the material has a node tree
                if mat.node_tree:
                    nodes = mat.node_tree.nodes
                    links = mat.node_tree.links

                    # Remove any existing Attribute nodes with name 'Color'
                    for node in nodes:
                        if node.type == 'ATTRIBUTE' and node.attribute_name == 'Color':
                            nodes.remove(node)
                    
                    # Remove any existing MixRGB nodes
                    for node in nodes:
                        if node.type == 'MIX_RGB':
                            nodes.remove(node)
                            
                    # Check if the material's name contains certain strings
                    clamp_u = 'ClampS' in mat.name
                    clamp_v = 'ClampT' in mat.name
                    mirror_u = 'MirrorS' in mat.name
                    mirror_v = 'MirrorT' in mat.name

                    # Find the Principled BSDF and Image Texture nodes
                    principled_bsdf = next((node for node in nodes if node.type == 'BSDF_PRINCIPLED'), None)
                    image_texture = next((node for node in nodes if node.type == 'TEX_IMAGE'), None)
                    
                    # Apply clamping if necessary
                    if clamp_u and clamp_v and image_texture:
                        image_texture.extension = 'EXTEND'
                        
                    # Mirroring overrides clamping
                    if (mirror_u or mirror_v) and image_texture:
                        image_texture.extension = 'MIRROR'
                        
                    # Set the material to 'decal' mode if 'Transparent' is in the material name
                    if 'Transparent' in mat.name:
                        mat.blend_method = 'BLEND'
                        mat.shadow_method = 'CLIP'
                        if image_texture:
                            image_texture.image.alpha_mode = 'PREMUL'
                        
                        # Set GLTF export properties to ensure transparency is recognized in Three.js
                        if not mat.get("alphaMode"):
                            mat["alphaMode"] = "BLEND"  # This is the GLTF setting for transparency

                    if principled_bsdf:
                        # Set the roughness to maximum to remove reflections
                        principled_bsdf.inputs['Roughness'].default_value = 1.0
                        
                        # Set the IOR to a value that minimizes reflections (IOR = 1.0)
                        principled_bsdf.inputs['IOR'].default_value = 1.0
                        
                        # Set the specular to 0 to remove any specular lighting
                        if 'Specular' in principled_bsdf.inputs:
                            principled_bsdf.inputs['Specular'].default_value = 0.0
                        
                        # Create an Attribute node
                        attribute_node = nodes.new(type='ShaderNodeAttribute')
                        attribute_node.attribute_name = 'Color'  # Set the name to 'Color'
                        attribute_node.location = (-400, -25)  # Adjust the location as needed
                        
                        links.new(attribute_node.outputs['Color'], principled_bsdf.inputs['Base Color'])

                    # If both nodes are present, create and connect new nodes
                    if principled_bsdf and image_texture:
                        # Create a MixRGB node
                        mix_node = nodes.new(type='ShaderNodeMixRGB')
                        mix_node.blend_type = 'MULTIPLY'
                        mix_node.inputs['Fac'].default_value = 1.0
                        mix_node.location = (-200, 300)  # Adjust the location as needed

                        # Connect the nodes
                        links.new(image_texture.outputs['Color'], mix_node.inputs['Color1'])
                        links.new(attribute_node.outputs['Color'], mix_node.inputs['Color2'])
                        links.new(mix_node.outputs['Color'], principled_bsdf.inputs['Base Color'])
                        
                        # Connect the image texture's alpha to the Principled BSDF's alpha
                        links.new(image_texture.outputs['Alpha'], principled_bsdf.inputs['Alpha'])

                    # Set the material to 'decal' mode if 'TopFlag' is in the material name
                    if 'TopFlag' in mat.name:
                        mat.blend_method = 'BLEND'
                        mat.shadow_method = 'NONE'
                        mat.use_backface_culling = False  # Double-sided material (no backface culling)
                        mat.use_nodes = True  # Enable nodes if not already
                        mat.show_transparent_back = True  # Allow showing the back side of the transparent object
                        
                        # Disable depth write to ensure the decal is always on top
                        if not mat.get("depthWrite"):
                            mat["depthWrite"] = False  # Ensure depthWrite is false for GLTF
                        
                        # Ensure the alphaMode is set correctly for GLTF exports
                        if not mat.get("alphaMode"):
                            mat["alphaMode"] = "BLEND"

                        # Ensure Three.js recognizes the decal
                        if principled_bsdf and image_texture:
                            # Connect the image texture's alpha to the Principled BSDF's alpha
                            links.new(image_texture.outputs['Alpha'], principled_bsdf.inputs['Alpha'])
                    else:
                        # Make non-translucent materials one-sided (enable backface culling)
                        mat.use_backface_culling = True

                    if 'CullBoth' in mat.name:
                        mat.use_backface_culling = False

    print("Materials updated.")

def export_obj_files(path):
    # Ensure the directory exists
    if not os.path.exists(path):
        os.makedirs(path)

    # Deselect all objects
    bpy.ops.object.select_all(action='DESELECT')

    # Loop through all objects in the scene
    for obj in bpy.context.scene.objects:
        # Check if the object is a mesh
        print("Working")
        if obj.type == 'MESH':
            # Select the object
            obj.select_set(True)
            
            # Set the object as the active object
            bpy.context.view_layer.objects.active = obj
            
            # Define the file path for exporting
            filepath = os.path.join(path, obj.name + ".glb")
            
            # Export the selected object as GLB
            # bpy.ops.export_scene.gltf(filepath=filepath, use_selection=True, export_format='GLB', export_vertex_color='ACTIVE')
            bpy.ops.export_scene.gltf(filepath=filepath, use_selection=True, export_format='GLB', export_vertex_color='ACTIVE')
            # bpy.ops.export_scene.gltf(filepath=filepath, use_selection=True, export_format='GLB')
            
            # Deselect the object after exporting
            obj.select_set(False)
    print("Export completed!")

#####################################################
# Script
#####################################################

# Command Line Arguments
argv = sys.argv
script_args = argv[argv.index("--") + 1:] 

if len(script_args) < 0:
    print("No script arguments provided, exiting.")
    exit

delete_cube()
load_obj_files(script_args[0])
spiro_magic()
export_obj_files(script_args[1])