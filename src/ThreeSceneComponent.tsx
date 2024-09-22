import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { GLTFLoader } from "three-stdlib";

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

  // Handle keyboard input for movement
  const initMovement = (
    camera: THREE.PerspectiveCamera,
    domElement: HTMLElement
  ) => {
    controls = new PointerLockControls(camera, domElement);

    // Lock the pointer and start controlling the camera when the user clicks
    document.addEventListener("click", () => {
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
        moveSpeed = Math.max(0.05, moveSpeed - scene.speed * 0.25); // Scroll down to decrease speed, min speed is 0.05
      }
    });
  };

  const updateMovement = (camera: THREE.PerspectiveCamera) => {
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

    // Handle forward/backward movement
    if (keys.w) velocity.addScaledVector(forward, currentMoveSpeed); // Move forward
    if (keys.s) velocity.addScaledVector(forward, -currentMoveSpeed); // Move backward

    // Handle left/right strafing movement
    if (keys.a) velocity.addScaledVector(right, -currentMoveSpeed); // Move left
    if (keys.d) velocity.addScaledVector(right, currentMoveSpeed); // Move right

    // Apply velocity to move the camera
    controls.getObject().position.add(velocity);
  };

  const isControlsLocked = () => controls && controls.isLocked;

  useEffect(() => {
    // Fetch Content.txt from scene.path
    const fetchContent = async () => {
      try {
        const contentPath = `/assets${scene.path}/Content.txt`;
        console.log("Downloading:", contentPath);

        const response = await fetch(contentPath);
        if (!response.ok) {
          console.error(`Failed to fetch Content.txt from ${contentPath}`);
          return;
        }

        const contentText = await response.text();

        // Assume Content.txt contains file names, one per line
        const fileList = contentText
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line !== "");
        setFiles(fileList);
      } catch (error) {
        console.error(`Error fetching Content.txt:`, error);
      }
    };

    fetchContent();
  }, [scene.path]);

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
    camera.lookAt(scene.startRotX, scene.startRotY, scene.startRotZ);

    // Initialize Pointer Lock and movement
    initMovement(camera, renderer.domElement);

    // Lights
    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 2); // Bright sky color, dim ground color
    light.position.set(0, 1, 0);
    threeScene.add(light);

    //Skybox
    const skyboxLoader = new THREE.TextureLoader();
    console.log(`Loading skybox: /assets/Skyboxes/${scene.skybox}`);
    skyboxLoader.load(`/assets/Skyboxes/${scene.skybox}`, function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      threeScene.background = texture;
    });

    // Model Loading
    const loader = new GLTFLoader();

    files.forEach((fileName) => {
      const fileUrl = `/assets${scene.path}/${fileName}`;
      console.log("Attempting to load model from:", fileUrl);
      loader.load(
        fileUrl,
        (gltf) => {
          threeScene.add(gltf.scene);
          console.log("Model loaded:", fileUrl);
        },
        (xhr) => {
          console.log(
            `Loading ${fileUrl}: ${((xhr.loaded / xhr.total) * 100).toFixed(
              2
            )}% loaded`
          );
        },
        (error) => {
          console.error(`Error loading ${fileUrl}:`, error);
        }
      );
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update camera movement if pointer lock is active
      if (isControlsLocked()) {
        updateMovement(camera);
      }

      renderer.render(threeScene, camera);
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
