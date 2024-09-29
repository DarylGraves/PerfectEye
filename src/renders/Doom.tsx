import React, { useEffect, useRef, useState } from "react";
import Scene from "../Scene";
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { GLTFLoader } from "three-stdlib";

interface SceneProps {
  scene: Scene;
}

type AnimatedTextureKey = keyof typeof animatedTextures;

// const skyBoxes = ["F_SKY1"];

// Define animated texture sequences
const animatedTextures = {
  NUKAGE: [
    "/PerfectEye/assets/Games/Ultimate DOOM/_AnimatedTextures/NUKAGE1.png",
    "/PerfectEye/assets/Games/Ultimate DOOM/_AnimatedTextures/NUKAGE2.png",
    "/PerfectEye/assets/Games/Ultimate DOOM/_AnimatedTextures/NUKAGE3.png",
  ],
  BLOOD: [
    "/PerfectEye/assets/Games/Ultimate DOOM/_AnimatedTextures/BLOOD1.png",
    "/PerfectEye/assets/Games/Ultimate DOOM/_AnimatedTextures/BLOOD2.png",
    "/PerfectEye/assets/Games/Ultimate DOOM/_AnimatedTextures/BLOOD3.png",
  ],
  FWATER: [
    "/PerfectEye/assets/Games/Ultimate DOOM/_AnimatedTextures/FWATER1.png",
    "/PerfectEye/assets/Games/Ultimate DOOM/_AnimatedTextures/FWATER2.png",
    "/PerfectEye/assets/Games/Ultimate DOOM/_AnimatedTextures/FWATER3.png",
    "/PerfectEye/assets/Games/Ultimate DOOM/_AnimatedTextures/FWATER4.png",
  ],
  LAVA: [
    "/PerfectEye/assets/Games/Ultimate DOOM/_AnimatedTextures/LAVA1.png",
    "/PerfectEye/assets/Games/Ultimate DOOM/_AnimatedTextures/LAVA2.png",
    "/PerfectEye/assets/Games/Ultimate DOOM/_AnimatedTextures/LAVA3.png",
    "/PerfectEye/assets/Games/Ultimate DOOM/_AnimatedTextures/LAVA4.png",
  ],
};

// Map frame-specific texture names to the corresponding animation sequence
const textureFrameMapping: { [key: string]: AnimatedTextureKey } = {
  NUKAGE1: "NUKAGE",
  NUKAGE2: "NUKAGE",
  NUKAGE3: "NUKAGE",
  FWATER1: "FWATER",
  FWATER2: "FWATER",
  FWATER3: "FWATER",
  FWATER4: "FWATER",
  LAVA1: "LAVA",
  LAVA2: "LAVA",
  LAVA3: "LAVA",
  LAVA4: "LAVA",
  BLOOD1: "BLOOD",
  BLOOD2: "BLOOD",
  BLOOD3: "BLOOD",
};

const Doom: React.FC<SceneProps> = ({ scene }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [files, setFiles] = useState<string[]>([]);
  let controls: PointerLockControls;
  let moveSpeed = scene.speed; // Initial movement speed
  const cameraclipdistance = scene.cameraclip;
  const velocity = new THREE.Vector3();
  const keys = { w: false, a: false, s: false, d: false }; // Track which keys are pressed
  let isShiftPressed = false; // Track the state of the shift key
  const clock = new THREE.Clock(); // Create a clock to track delta time

  // Function to animate textures based on predefined sequences
  function animateTexture(
    material: THREE.MeshStandardMaterial | THREE.MeshBasicMaterial,
    textures: string[],
    frameRate = 500
  ) {
    const loader = new THREE.TextureLoader();
    const loadedTextures: THREE.Texture[] = [];

    // Preload all the textures
    textures.forEach((textureUrl, index) => {
      loader.load(
        textureUrl,
        (texture) => {
          // Set texture properties to prevent blurring or zooming issues
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(1, 1);
          texture.magFilter = THREE.NearestFilter;
          texture.minFilter = THREE.NearestFilter;
          texture.anisotropy = 1;
          texture.needsUpdate = true;
          loadedTextures[index] = texture; // Store the texture in the array
        },
        undefined
      );
    });

    let currentFrame = 0;

    setInterval(() => {
      if (loadedTextures.length === textures.length) {
        // Ensure all textures are loaded
        material.map = loadedTextures[currentFrame];
        material.map.needsUpdate = true; // Ensure the material updates
        material.needsUpdate = true; // Update the material itself
        currentFrame = (currentFrame + 1) % textures.length; // Loop through the frames
      }
    }, frameRate); // frameRate in milliseconds
  }

  // Process materials and apply animations where necessary
  function processMaterial(
    material: THREE.MeshStandardMaterial | THREE.MeshBasicMaterial
  ) {
    // Set default material properties
    material.premultipliedAlpha = true;
    material.depthWrite = true;
    material.side = THREE.DoubleSide;
    material.alphaTest = 0.5;
    material.opacity = 1.0;

    // Convert material name to uppercase for case-insensitive matching
    const materialNameUpper = material.name.toUpperCase();

    // if texture is called F_SKY1, don't render it as this is replaced by the skybox
    if (materialNameUpper.includes("F_SKY")) {
      material.visible = false;
    }

    Object.keys(textureFrameMapping).forEach((frameName) => {
      const frameNameUpper = frameName.toUpperCase();
      if (materialNameUpper.includes(frameNameUpper)) {
        const textureKey = textureFrameMapping[frameName];
        animateTexture(material, animatedTextures[textureKey]);
      }
    });
  }

  // Handle keyboard input for movement
  const initMovement = (
    camera: THREE.PerspectiveCamera,
    domElement: HTMLElement
  ) => {
    controls = new PointerLockControls(camera, domElement);
    domElement.addEventListener("click", () => controls.lock());

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

    domElement.addEventListener("wheel", (event) => {
      if (event.deltaY < 0) {
        moveSpeed += scene.speed * 0.25;
      } else if (event.deltaY > 0) {
        moveSpeed = Math.max(1, moveSpeed - scene.speed * 0.25);
      }
    });
  };

  const updateMovement = (camera: THREE.PerspectiveCamera, delta: number) => {
    if (!controls || !controls.isLocked) return;
    velocity.set(0, 0, 0);
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(
      camera.quaternion
    );
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
    const currentMoveSpeed = isShiftPressed ? moveSpeed * 2 : moveSpeed;
    if (keys.w) velocity.addScaledVector(forward, currentMoveSpeed * delta);
    if (keys.s) velocity.addScaledVector(forward, -currentMoveSpeed * delta);
    if (keys.a) velocity.addScaledVector(right, -currentMoveSpeed * delta);
    if (keys.d) velocity.addScaledVector(right, currentMoveSpeed * delta);
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

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xaaaaaa);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    const threeScene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      80,
      width / height,
      0.1,
      cameraclipdistance
    );
    camera.position.set(scene.startPosX, scene.startPosY, scene.startPosZ);
    camera.rotation.set(scene.startRotX, scene.startRotY, scene.startRotZ);

    initMovement(camera, renderer.domElement);

    const light = new THREE.AmbientLight(0xffffff, 2);
    light.position.set(0, 1, 0);
    threeScene.add(light);

    const skyboxLoader = new THREE.TextureLoader();
    skyboxLoader.load(
      `/PerfectEye/assets/Skyboxes/${scene.skybox}`,
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        threeScene.background = texture;
      }
    );

    const loader = new GLTFLoader();
    files.forEach((fileName) => {
      const fileUrl = `/PerfectEye/assets/Games${scene.path}/${fileName}`;
      loader.load(
        fileUrl,
        (gltf) => {
          const model = gltf.scene;
          model.traverse((node: THREE.Object3D) => {
            if ((node as THREE.Mesh).isMesh) {
              const mesh = node as THREE.Mesh;
              if (Array.isArray(mesh.material)) {
                mesh.material.forEach((material) => {
                  if (
                    material instanceof THREE.MeshStandardMaterial ||
                    material instanceof THREE.MeshBasicMaterial
                  ) {
                    processMaterial(material);
                  }
                });
              } else if (
                mesh.material instanceof THREE.MeshStandardMaterial ||
                mesh.material instanceof THREE.MeshBasicMaterial
              ) {
                processMaterial(mesh.material);
              }
            }
          });
          threeScene.add(model);
        },
        (error) => {
          console.error(`Error loading ${fileUrl}:`, error);
        }
      );
    });

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (isControlsLocked()) updateMovement(camera, delta);
      renderer.render(threeScene, camera);
      // console.log("Camera coordinates:", camera.position);
      // console.log("Camera rotation:", camera.rotation);
    };
    animate();

    const handleResize = () => {
      const width = mount.clientWidth || window.innerWidth;
      const height = mount.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

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

export default Doom;
