import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders'; // Import the loaders

// Get the canvas element
var canvas = document.getElementById("renderCanvas");

// Initialize Babylon engine
var engine = new BABYLON.Engine(canvas, true);

// Create a function to run within Babylon.js
function createScene() {
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    // Adjust camera's near and far planes for better depth precision
    camera.minZ = 1;
    camera.maxZ = 10000;

    // Add a light to the scene
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Create a material and ensure depth writing and testing are enabled
    var material = new BABYLON.StandardMaterial("material", scene);
    material.backFaceCulling = true; // Ensure back-face culling is enabled
    material.depthFunction = BABYLON.Constants.LEQUAL; // Use the LESS_EQUAL depth function
    material.needDepthPrePass = true; // For transparent or complex shaders

    // Load the .glb file into the scene
    BABYLON.SceneLoader.Append("/assets/", "dam.glb", scene, function (scene) {
        // After loading the model, apply depth properties to the loaded meshes' materials
        scene.meshes.forEach(function (mesh) {
            if (mesh.material) {
                mesh.material.backFaceCulling = false;
                mesh.material.depthFunction = BABYLON.Constants.LEQUAL;
                mesh.material.needDepthPrePass = true;
            }
        });

        console.log("GLB model loaded");
    }, null, function (scene, message) {
        console.error("Failed to load the GLB model:", message);
    });

    // WASD movement
    var inputMap = {};
    scene.actionManager = new BABYLON.ActionManager(scene);

    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));

    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));

    scene.onBeforeRenderObservable.add(() => {
        const speed = 0.1;
        const forward = camera.getDirection(BABYLON.Axis.Z);  // Forward direction
        const right = camera.getDirection(BABYLON.Axis.X);    // Right direction

        if (inputMap["w"]) {
            camera.position.addInPlace(forward.scale(speed));  // Move forward relative to the camera
        }
        if (inputMap["s"]) {
            camera.position.addInPlace(forward.scale(-speed)); // Move backward relative to the camera
        }
        if (inputMap["a"]) {
            camera.position.addInPlace(right.scale(-speed));   // Move left relative to the camera
        }
        if (inputMap["d"]) {
            camera.position.addInPlace(right.scale(speed));    // Move right relative to the camera
        }
    });


    return scene;
}

// Run the createScene function
var scene = createScene();

// Register a render loop to continuously render the scene
engine.runRenderLoop(function() {
    scene.render();
});

// Resize the engine when the window is resized
window.addEventListener("resize", function() {
    engine.resize();
});
