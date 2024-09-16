import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  initMovement,
  updateMovement,
  isControlsLocked,
} from "./scripts/movement.js"; // Import movement functions

// Remove scroll bars by setting body styles
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.overflow = "hidden";

// Create buttons dynamically (if not present in HTML)
const damButton = document.createElement("button");
damButton.id = "damButton";
damButton.textContent = "Load Dam Map";
document.body.appendChild(damButton);

const facilityButton = document.createElement("button");
facilityButton.id = "facilityButton";
facilityButton.textContent = "Load Facility Map";
document.body.appendChild(facilityButton);

const archivesButton = document.createElement("button");
archivesButton.id = "archivesButton";
archivesButton.textContent = "Load Archives Map";
document.body.appendChild(archivesButton);

const complexGEbutton = document.createElement("button");
complexGEbutton.id = "complexGEbutton";
complexGEbutton.textContent = "Load Complex Map";
document.body.appendChild(complexGEbutton);

const aztecButton = document.createElement("button");
aztecButton.id = "aztecButton";
aztecButton.textContent = "Load Aztec Map";
document.body.appendChild(aztecButton);

const pelagicButton = document.createElement("button");
pelagicButton.id = "pelagicButton";
pelagicButton.textContent = "Load Pelagic II Map";
document.body.appendChild(pelagicButton);

const chicagoButton = document.createElement("button");
chicagoButton.id = "chicagoButton";
chicagoButton.textContent = "Load Chicago Stealth Map";
document.body.appendChild(chicagoButton);

// Instantiate the GLTFLoader
const gltfloader = new GLTFLoader();

// Initialize the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Initialize the scene
const scene = new THREE.Scene();

// Add a camera to the scene
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.5,
  5000
);
camera.position.set(0, 5, -10);
camera.lookAt(new THREE.Vector3(0, 0, 0)); // Camera targets the center of the scene

// Initialize movement controls
initMovement(camera, document.body);

// Generic skybox
// Load a single equirectangular texture
const loader = new THREE.TextureLoader();
loader.load("assets/zSkyboxes/sky.png", function (texture) {
  // Set the texture as the scene's background
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture;
});

// Add a Hemispheric Light to the scene
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 2); // Bright sky color, dim ground color
light.position.set(0, 1, 0);
scene.add(light);

// Determine the folder based on stored value or default
let folder = localStorage.getItem("selectedFolder");
if (!folder) {
  folder = "Dam";
}

// Load the map when the page loads
loadMap(folder);

// Add event listeners to the buttons
document.getElementById("damButton").addEventListener("click", () => {
  localStorage.setItem("selectedFolder", "Dam");
  loadMap("Dam");
});

document.getElementById("facilityButton").addEventListener("click", () => {
  localStorage.setItem("selectedFolder", "Facility");
  loadMap("Facility");
});
document.getElementById("archivesButton").addEventListener("click", () => {
  localStorage.setItem("selectedFolder", "Archives");
  loadMap("Archives");
});
document.getElementById("complexGEbutton").addEventListener("click", () => {
  localStorage.setItem("selectedFolder", "ComplexGE");
  loadMap("ComplexGE");
});
document.getElementById("aztecButton").addEventListener("click", () => {
  localStorage.setItem("selectedFolder", "Aztec");
  loadMap("Aztec");
});
document.getElementById("pelagicButton").addEventListener("click", () => {
  localStorage.setItem("selectedFolder", "PelagicIIExploration");
  loadMap("PelagicIIExploration");
});

document.getElementById("chicagoButton").addEventListener("click", () => {
  localStorage.setItem("selectedFolder", "ChicagoStealth");
  loadMap("ChicagoStealth");
});

// Function to load a map
function loadMap(folder) {
  // Clear existing models from the scene
  while (scene.children.length > 0) {
    scene.remove(scene.children[0]);
  }

  // Add the light back after clearing the scene
  scene.add(light);

  // Set camera start position based on the folder
  switch (folder) {
    case "Dam":
      camera.position.set(
        621.6265910446157,
        6.3358213464629,
        629.8439472212391
      );
      camera.rotation.set(
        -0.037711177685525774,
        1.0116802326496004,
        0.03197294540578007
      );
      break;
    case "Facility":
      camera.position.set(
        -656.3472958065867,
        45.39142087488991,
        15.483453691484591
      );
      camera.rotation.set(
        -2.2775483196910242,
        1.5276646134062262,
        2.2780078403136947
      );
      break;
    case "Archives":
      camera.position.set(
        98.64691632898699,
        10.018699057476924,
        170.34038117443268
      );
      camera.rotation.set(
        -2.951983302859254,
        1.2489834964284174,
        2.9615026088592176
      );
      break;
    case "ComplexGE":
      camera.position.set(
        114.96759148517313,
        50.98467751193548,
        64.05877661712408
      );
      camera.rotation.set(
        -3.0989594528705977,
        1.4851078257592285,
        3.0991156862406553
      );
      break;
    case "Aztec":
      camera.position.set(
        307.1357415336462,
        5.0677302893706715,
        -61.88404018086294
      );
      camera.rotation.set(
        1.5939641760507302,
        1.5364347107930187,
        -1.5939778552614134
      );
    default:
      break;
  }

  // Load the .glb files based on the folder
  fetch(`assets/${folder}/Content.txt`)
    .then((response) => response.text())
    .then((data) => {
      const glbFiles = data
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);

      console.log(glbFiles);

      glbFiles.forEach((file) => {
        loadGLB(folder, file);
      });
    })
    .catch((error) => {
      console.error("Error fetching the content file:", error);
    });
}

function loadGLB(folder, file) {
  gltfloader.load(
    `assets/${folder}/${file}`,
    (gltf) => {
      const model = gltf.scene;
      model.traverse(function (node) {
        if (node.isMesh) {
          if (Array.isArray(node.material)) {
            node.material.forEach(function (material) {
              processMaterial(material, node, file);
            });
          } else {
            processMaterial(node.material, node, file);
          }
        }
      });
      scene.add(model);
      console.log(file + " loaded");
    },
    undefined,
    (error) => {
      console.error("Failed to load the GLB model: " + file, error);
    }
  );
}

function processMaterial(material, node, file) {
  // Define texture properties to check
  const textureProps = [
    "map",
    "normalMap",
    "alphaMap",
    "roughnessMap",
    "metalnessMap",
    "bumpMap",
    "displacementMap",
    "emissiveMap",
    "lightMap",
    "aoMap",
  ];

  // Set default material properties
  material.premultipliedAlpha = true;
  material.depthWrite = true;
  material.side = THREE.FrontSide;
  material.opacity = 1.0;

  // Extract opacity from the material name (if present)
  const opacityRegex = /Opacity(\d+\.\d+)/;
  const opacityMatch = opacityRegex.exec(material.name);

  if (opacityMatch) {
    const opacityValue = parseFloat(opacityMatch[1]); // Extract the opacity value
    material.opacity = opacityValue; // Set the material opacity
  }

  // Check material name for texture addressing modes
  const name = material.name;

  const clampS = name.includes("ClampS");
  const clampT = name.includes("ClampT");
  const mirrorS = name.includes("MirrorS");
  const mirrorT = name.includes("MirrorT");

  // Apply texture wrapping modes based on material name
  if (mirrorS || mirrorT) {
    // Mirroring overrides clamping
    textureProps.forEach(function (prop) {
      const texture = material[prop];
      if (texture) {
        if (mirrorS) texture.wrapS = THREE.MirroredRepeatWrapping;
        if (mirrorT) texture.wrapT = THREE.MirroredRepeatWrapping;
        texture.needsUpdate = true;
      }
    });
  } else if (clampS && clampT) {
    // Apply clamping if both ClampS and ClampT are present
    textureProps.forEach(function (prop) {
      const texture = material[prop];
      if (texture) {
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.needsUpdate = true;
      }
    });
  }

  // Handle materials with "TopFlag" or "UNTEXTURED" in their names
  if (name.includes("TopFlag") || name.includes("UNTEXTURED")) {
    material.polygonOffset = true;
    material.polygonOffsetFactor = -1;
    material.polygonOffsetUnits = -1;
    node.renderOrder = 999;
  }

  // Handle materials with "CullBoth" in their names
  if (name.includes("CullBoth")) {
    material.side = THREE.DoubleSide;
  }

  // Handle alpha materials based on file name
  if (file.includes("Alpha")) {
    material.transparent = true;
    material.alphaTest = 0.003;
    material.depthWrite = false;
    node.renderOrder = 9999;
  }
}

// Register a render loop to continuously render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  if (isControlsLocked()) {
    updateMovement(camera); // Update movement every frame if controls are active
    // Uncomment the following logs if needed
    // console.log(
    //   `Camera position: x: ${camera.position.x}, y: ${camera.position.y}, z: ${camera.position.z}`
    // );

    // console.log(
    //   `Camera rotation: x: ${camera.rotation.x}, y: ${camera.rotation.y}, z: ${camera.rotation.z}`
    // );
  }
}

animate();

// Resize the renderer when the window is resized
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
