import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { GLTFLoader } from "three-stdlib";

//TODO: Default ThreeJS scene could be cleaned up

interface SceneProps {
  scene: {
    name: string;
    path: string;
    renderer: string;
    cameraclip: number;
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

const MetalGearSolid: React.FC<SceneProps> = ({ scene }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [files, setFiles] = useState<string[]>([]);
  let controls: PointerLockControls;
  let moveSpeed = scene.speed; // Initial movement speed
  const cameraclipdistance = scene.cameraclip;
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
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      cameraclipdistance
    );
    camera.position.set(scene.startPosX, scene.startPosY, scene.startPosZ);
    camera.rotation.set(scene.startRotX, scene.startRotY, scene.startRotZ);

    // Initialize Pointer Lock and movement
    initMovement(camera, renderer.domElement);

    // Skybox
    const skyboxLoader = new THREE.TextureLoader();
    skyboxLoader.load(`/assets/Skyboxes/${scene.skybox}`, function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      threeScene.background = texture;
    });

    // Model Loading
    const loader = new GLTFLoader();
    // files.forEach((fileName) => {
    //   const fileUrl = `/assets/Games${scene.path}/${fileName}`;
    //   loader.load(
    //     fileUrl,
    //     (gltf) => {
    //       const model = gltf.scene;

    //       // Traverse through the model to find meshes and replace materials
    //       model.traverse((node: THREE.Object3D) => {
    //         if ((node as THREE.Mesh).isMesh) {
    //           const mesh = node as THREE.Mesh;

    //           if (Array.isArray(mesh.material)) {
    //             mesh.material = mesh.material.map((material) => {
    //               const standardMaterial =
    //                 material as THREE.MeshStandardMaterial; // Cast to a compatible material type
    //               return new THREE.MeshBasicMaterial({
    //                 map: standardMaterial.map || null, // Use texture map if available
    //                 transparent: true, // Enable transparency
    //                 opacity: standardMaterial.opacity ?? 1.0, // Use material's opacity
    //                 alphaTest: 0.01, // Handle semi-transparent textures
    //                 depthWrite: false, // Prevent depth sorting issues with transparency
    //                 side: THREE.DoubleSide, // Render both sides
    //               });
    //             });
    //           } else {
    //             const originalMaterial =
    //               mesh.material as THREE.MeshStandardMaterial; // Cast to a compatible material type
    //             mesh.material = new THREE.MeshBasicMaterial({
    //               map: originalMaterial.map || null, // Use texture map if available
    //               transparent: true, // Enable transparency
    //               opacity: originalMaterial.opacity ?? 1.0, // Use material's opacity
    //               alphaTest: 0.01, // Handle semi-transparent textures
    //               depthWrite: false, // Prevent depth sorting issues with transparency
    //               side: THREE.DoubleSide, // Render both sides
    //             });
    //           }
    //         }
    //       });

    // Add the processed model to the scene
    // threeScene.add(model);
    //     },
    //     (error) => {
    //       console.error(`Error loading ${fileUrl}:`, error);
    //     }
    //   );
    // });

    files.forEach((fileName) => {
      const fileUrl = `/assets/Games${scene.path}/${fileName}`;
      loader.load(
        fileUrl,
        (gltf) => {
          const model = gltf.scene;

          // Traverse through the model to find meshes and enforce transparency settings
          model.traverse((node: THREE.Object3D) => {
            if ((node as THREE.Mesh).isMesh) {
              const mesh = node as THREE.Mesh;

              if (Array.isArray(mesh.material)) {
                mesh.material = mesh.material.map((material) =>
                  processMaterial(material as THREE.Material)
                );
              } else {
                mesh.material = processMaterial(
                  mesh.material as THREE.Material
                );
              }
            }
          });

          // Add the processed model to the scene
          threeScene.add(model);
        },
        undefined,
        (error) => {
          console.error(`Error loading ${fileUrl}:`, error);
        }
      );
    });

    function processMaterial(material: THREE.Material): THREE.Material {
      const texture = (material as any).map || null;

      const basicMaterial = new THREE.MeshBasicMaterial({
        map: texture, // Apply the texture if available
        color: (material as any).color || 0xffffff, // Fallback color
        transparent: true, // Ensure transparency
        opacity: 1.0, // Keep full opacity (transparency handled by texture)
        alphaTest: 0.5, // Discard pixels below this alpha threshold
        side: material.side || THREE.DoubleSide, // Render both sides of the mesh
        blending: THREE.NormalBlending, // Smooth transparency blending
        depthWrite: true,
        premultipliedAlpha: true,
      });

      return basicMaterial;
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
      // console.log("Camera coordinates:", camera.position);
      // console.log("Camera rotation:", camera.rotation);
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

export default MetalGearSolid;
