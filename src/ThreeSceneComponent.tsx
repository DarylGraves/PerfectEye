import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { GLTFLoader } from "three-stdlib";

//TODO: 4 - Before Prod remove /PerfectEye/ from all download paths.

interface SceneProps {
  scene: {
    name: string;
    path: string;
    renderer: string;
    speed: number;
    skybox: string;
    startPosX: number;
    startPosY: number;
    startPosZ: number;
    startRotX: number;
    startRotY: number;
    startRotZ: number;
  };
}

const ThreeSceneComponent: React.FC<SceneProps> = ({ scene }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [files, setFiles] = useState<string[]>([]);
  let controls: PointerLockControls;
  let moveSpeed = scene.speed; // Initial movement speed
  const velocity = new THREE.Vector3();
  const keys = { w: false, a: false, s: false, d: false }; // Track which keys are pressed
  let isShiftPressed = false; // Track the state of the shift key
  const clock = new THREE.Clock(); // Create a clock to track delta time

  // Handle keyboard input for movement
  const initMovement = (
    camera: THREE.PerspectiveCamera,
    domElement: HTMLElement
  ) => {
    controls = new PointerLockControls(camera, domElement);

    // Lock the pointer and start controlling the camera when the user clicks
    domElement.addEventListener("click", () => {
      controls.lock();
    });

    // Handle keyboard input for movement
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "KeyW":
          keys.w = true;
          break;
        case "KeyA":
          keys.a = true;
          break;
        case "KeyS":
          keys.s = true;
          break;
        case "KeyD":
          keys.d = true;
          break;
        case "ShiftLeft":
        case "ShiftRight":
          isShiftPressed = true;
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.code) {
        case "KeyW":
          keys.w = false;
          break;
        case "KeyA":
          keys.a = false;
          break;
        case "KeyS":
          keys.s = false;
          break;
        case "KeyD":
          keys.d = false;
          break;
        case "ShiftLeft":
        case "ShiftRight":
          isShiftPressed = false;
          break;
      }
    });

    // Handle mouse wheel to adjust speed
    domElement.addEventListener("wheel", (event) => {
      if (event.deltaY < 0) {
        moveSpeed += scene.speed * 0.25; // Scroll up to increase speed
      } else if (event.deltaY > 0) {
        moveSpeed = Math.max(1, moveSpeed - scene.speed * 0.25);
      }
    });
  };

  const updateMovement = (camera: THREE.PerspectiveCamera, delta: number) => {
    if (!controls || !controls.isLocked) return;

    // Reset velocity
    velocity.set(0, 0, 0);

    // Get the camera's forward direction (for W and S)
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(
      camera.quaternion
    );

    // Get the camera's right direction (for A and D)
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);

    // Adjust movement speed based on whether Shift is pressed
    const currentMoveSpeed = isShiftPressed ? moveSpeed * 2 : moveSpeed;

    // Handle forward/backward movement with delta time
    if (keys.w) velocity.addScaledVector(forward, currentMoveSpeed * delta); // Move forward
    if (keys.s) velocity.addScaledVector(forward, -currentMoveSpeed * delta); // Move backward

    // Handle left/right strafing movement with delta time
    if (keys.a) velocity.addScaledVector(right, -currentMoveSpeed * delta); // Move left
    if (keys.d) velocity.addScaledVector(right, currentMoveSpeed * delta); // Move right

    // Apply velocity to move the camera
    controls.getObject().position.add(velocity);
  };

  const isControlsLocked = () => controls && controls.isLocked;

  useEffect(() => {
    setFiles([`${scene.name}.glb`]);
  }, [scene.name]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) {
      console.error("Mount ref is null");
      return;
    }

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xaaaaaa); // Light gray background
    mount.appendChild(renderer.domElement);

    // Style the canvas
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    // Scene
    const threeScene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(scene.startPosX, scene.startPosY, scene.startPosZ);
    camera.rotation.set(scene.startRotX, scene.startRotY, scene.startRotZ);

    // Initialize Pointer Lock and movement
    initMovement(camera, renderer.domElement);

    // Lights
    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 2); // Bright sky color, dim ground color
    light.position.set(0, 1, 0);
    threeScene.add(light);

    // Skybox
    const skyboxLoader = new THREE.TextureLoader();
    skyboxLoader.load(
      `/PerfectEye/assets/Skyboxes/${scene.skybox}`,
      function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        threeScene.background = texture;
      }
    );

    // Model Loading
    const loader = new GLTFLoader();

    files.forEach((fileName) => {
      const fileUrl = `/PerfectEye/assets${scene.path}/${fileName}`;
      loader.load(
        fileUrl,
        (gltf) => {
          const model = gltf.scene;

          // Traverse through the model to find meshes and process materials
          model.traverse((node: THREE.Object3D) => {
            if ((node as THREE.Mesh).isMesh) {
              const mesh = node as THREE.Mesh;

              // Check if the mesh has a material and process it
              if (Array.isArray(mesh.material)) {
                mesh.material.forEach((material: THREE.Material) => {
                  processMaterial(material, mesh, fileName);
                });
              } else {
                processMaterial(
                  mesh.material as THREE.Material,
                  mesh,
                  fileName
                );
              }
            }
          });

          // Add the processed model to the scene
          threeScene.add(model);
        },
        (error) => {
          console.error(`Error loading ${fileUrl}:`, error);
        }
      );
    });

    function processMaterial(
      material: THREE.Material,
      node: THREE.Mesh,
      file: string
    ) {
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
          const texture = (material as any)[prop];
          if (texture) {
            if (mirrorS) texture.wrapS = THREE.MirroredRepeatWrapping;
            if (mirrorT) texture.wrapT = THREE.MirroredRepeatWrapping;
            texture.needsUpdate = true;
          }
        });
      } else if (clampS && clampT) {
        // Apply clamping if both ClampS and ClampT are present
        textureProps.forEach(function (prop) {
          const texture = (material as any)[prop];
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

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Get the delta time
      const delta = clock.getDelta();

      // Update camera movement if pointer lock is active
      if (isControlsLocked()) {
        updateMovement(camera, delta);
      }

      renderer.render(threeScene, camera);
      //   console.log("Camera coordinates:", camera.position);
      //   console.log("Camera rotation:", camera.rotation);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      const width = mount.clientWidth || window.innerWidth;
      const height = mount.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, [files, scene.startPosX, scene.startPosY]);

  return <div ref={mountRef} />;
};

export default ThreeSceneComponent;
