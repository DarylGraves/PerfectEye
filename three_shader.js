import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'; // Import PointerLockControls

// Functions
async function loadFile(url) {
    const response = await fetch(url);
    return response.text();
}


// Initialize the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Initialize the scene
const scene = new THREE.Scene();

// Add a camera to the scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 5000);
camera.position.set(0, 5, -10); 
camera.lookAt(new THREE.Vector3(0, 0, 0));  // Camera targets the center of the scene

// Generic skybox
// Load a single equirectangular texture
const loader = new THREE.TextureLoader();
loader.load('assets/skybox/sky.png', function (texture) {
    // Set the texture as the scene's background
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
});

// Add a Hemispheric Light to the scene
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 2); // Bright sky color, dim ground color
light.position.set(0, 1, 0);
scene.add(light);

// Start location
// Dam
// camera.position.set(621.6265910446157, 6.3358213464629, 629.8439472212391);
// camera.rotation.set(-0.037711177685525774, 1.0116802326496004, 0.03197294540578007);

camera.position.set(37.84213196838526, 10.296707991472406, 88.52411938889554)
camera.rotation.set(-1.1851202836517367, -1.1545472349129202, -1.153014824948278)

// Load the .glb file into the scene
const gltfloader = new GLTFLoader();

const glbFiles = [
  "Archives_Alpha_10.glb",
  "Archives_Alpha_100.glb",
  "Archives_Alpha_105.glb",
  "Archives_Alpha_106.glb",
  "Archives_Alpha_11.glb",
  "Archives_Alpha_118.glb",
  "Archives_Alpha_119.glb",
  "Archives_Alpha_12.glb",
  "Archives_Alpha_120.glb",
  "Archives_Alpha_121.glb",
  "Archives_Alpha_122.glb",
  "Archives_Alpha_123.glb",
  "Archives_Alpha_124.glb",
  "Archives_Alpha_13.glb",
  "Archives_Alpha_14.glb",
  "Archives_Alpha_28.glb",
  "Archives_Alpha_29.glb",
  "Archives_Alpha_30.glb",
  "Archives_Alpha_31.glb",
  "Archives_Alpha_32.glb",
  "Archives_Alpha_33.glb",
  "Archives_Alpha_34.glb",
  "Archives_Alpha_35.glb",
  "Archives_Alpha_36.glb",
  "Archives_Alpha_37.glb",
  "Archives_Alpha_42.glb",
  "Archives_Alpha_43.glb",
  "Archives_Alpha_45.glb",
  "Archives_Alpha_46.glb",
  "Archives_Alpha_5.glb",
  "Archives_Alpha_50.glb",
  "Archives_Alpha_52.glb",
  "Archives_Alpha_54.glb",
  "Archives_Alpha_56.glb",
  "Archives_Alpha_57.glb",
  "Archives_Alpha_58.glb",
  "Archives_Alpha_59.glb",
  "Archives_Alpha_6.glb",
  "Archives_Alpha_62.glb",
  "Archives_Alpha_64.glb",
  "Archives_Alpha_66.glb",
  "Archives_Alpha_67.glb",
  "Archives_Alpha_68.glb",
  "Archives_Alpha_69.glb",
  "Archives_Alpha_7.glb",
  "Archives_Alpha_70.glb",
  "Archives_Alpha_71.glb",
  "Archives_Alpha_72.glb",
  "Archives_Alpha_73.glb",
  "Archives_Alpha_74.glb",
  "Archives_Alpha_75.glb",
  "Archives_Alpha_76.glb",
  "Archives_Alpha_77.glb",
  "Archives_Alpha_78.glb",
  "Archives_Alpha_79.glb",
  "Archives_Alpha_8.glb",
  "Archives_Alpha_80.glb",
  "Archives_Alpha_85.glb",
  "Archives_Alpha_86.glb",
  "Archives_Alpha_87.glb",
  "Archives_Alpha_88.glb",
  "Archives_Alpha_89.glb",
  "Archives_Alpha_90.glb",
  "Archives_Alpha_91.glb",
  "Archives_Alpha_92.glb",
  "Archives_Alpha_96.glb",
  "Archives_Alpha_97.glb",
  "Archives_Alpha_98.glb",
  "Archives_Alpha_99.glb",
  "Archives.glb"
];

const vertexShader = await loadFile("vertex.glsl");
const fragmentShader = await loadFile("fragment.glsl");

// Function to load a GLB file
function loadGLB(file) {
    gltfloader.load('assets/' + file, (gltf) => {
        const model = gltf.scene;
        model.traverse(function (node) {
            // If this object has no texture, ensure the map is set to null
            if (node.isMesh) {
                if(!node.geometry.attributes.color)
                {
                    console.warn("No vertext color attribute");
                }
                else
                {
                    console.log(node.geometry.attributes);
                }

                // const shaderMaterial = new THREE.ShaderMaterial({
                //     vertexShader: vertexShader,
                //     fragmentShader: fragmentShader,
                //     side: THREE.DoubleSide
                // });

                // node.material = shaderMaterial;

                // Extract the render order number from the filename
                const renderOrderMatch = file.match(/_Alpha_(\d+)\.glb/);
                if (renderOrderMatch) {
                    const renderOrder = parseInt(renderOrderMatch[1], 10); // Extract the number and convert to integer
                    node.renderOrder = renderOrder;  // Set renderOrder based on the number
                }

                // Check if the filename includes "Alpha"
                if (file.includes("Alpha")) {
                    node.material.transparent = true;
                    node.material.alphaTest = 0.015;
                    node.material.polygonOffset = true;
                    node.material.polygonOffsetFactor = -1; // Push decal towards the camera
                    node.material.polygonOffsetUnits = -1;  // Tweak this for more or less offset
                }

                node.material.depthTest = true;
                node.material.depthWrite = true;
                node.material.blending = THREE.NormalBlending;
                node.material.side = THREE.DoubleSide;
                node.material.roughness = 1;
            }
            console.log(renderer.info.programs);
        });
        scene.add(model);
        console.log(file + " loaded");
    }, undefined, (error) => {
        console.error('Failed to load the GLB model: ' + file, error);
    });
}

// Load all GLB files
glbFiles.forEach(file => loadGLB(file));
// Set up PointerLockControls for mouse-based camera movement
const controls = new PointerLockControls(camera, document.body);

// Lock the pointer and start controlling the camera when the user clicks
document.addEventListener('click', () => {
    controls.lock();  // Locks the pointer and enables FPS controls
});

// Movement variables
const moveSpeed = 0.40;  // Movement speed
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const keys = { w: false, a: false, s: false, d: false };  // Track which keys are pressed
let isShiftPressed = false;  // Track the state of the shift key

// Handle keyboard input for movement
document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'KeyW':
            keys.w = true;
            break;
        case 'KeyA':
            keys.a = true;
            break;
        case 'KeyS':
            keys.s = true;
            break;
        case 'KeyD':
            keys.d = true;
            break;
        case 'ShiftLeft':  // Detect shift key
            isShiftPressed = true;
            break;
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'KeyW':
            keys.w = false;
            break;
        case 'KeyA':
            keys.a = false;
            break;
        case 'KeyS':
            keys.s = false;
            break;
        case 'KeyD':
            keys.d = false;
            break;
        case 'ShiftLeft':  // Detect shift key release
            isShiftPressed = false;
            break;
    }
});

// Update movement based on the camera's direction
function updateMovement() {
    // Reset velocity
    velocity.set(0, 0, 0);
    
    // Get the camera's forward direction (for W and S)
    camera.getWorldDirection(direction);
    
    // Adjust the movement speed based on whether Shift is pressed
    const currentMoveSpeed = isShiftPressed ? moveSpeed * 2 : moveSpeed;

    // Handle forward/backward movement
    if (keys.w) {
        velocity.addScaledVector(direction, currentMoveSpeed); // Move forward based on the camera's direction
    }
    if (keys.s) {
        velocity.addScaledVector(direction, -currentMoveSpeed); // Move backward
    }

    // Get the camera's right direction (for A and D)
    const right = new THREE.Vector3();
    camera.getWorldDirection(right).cross(camera.up).normalize(); // Right direction is perpendicular to camera's up vector

    // Handle left/right strafing movement
    if (keys.a) {
        velocity.addScaledVector(right, -currentMoveSpeed); // Move left (strafe)
    }
    if (keys.d) {
        velocity.addScaledVector(right, currentMoveSpeed);  // Move right (strafe)
    }

    // Apply the velocity to move the camera
    controls.getObject().position.add(velocity); // Update the camera position
}


// Register a render loop to continuously render the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    if (controls.isLocked) {
        updateMovement();  // Update movement every frame if controls are active
        // Used to find start coordinates so we can update camera.position above
        // Camera Position:
        console.log(`Camera position: x: ${camera.position.x}, y: ${camera.position.y}, z: ${camera.position.z}`);

        // Camera Rotation:
        console.log(`Camera rotation: x: ${camera.rotation.x}, y: ${camera.rotation.y}, z: ${camera.rotation.z}`);
    }
}

animate();

// Resize the renderer when the window is resized
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
