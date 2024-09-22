import React, { useEffect, useRef, useState } from "react";
import { OrbitControls } from "three-stdlib";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

interface SceneProps {
  scene: {
    name: string;
    path: string;
    renderer: string;
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
        console.log("ContentText:", contentText);

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
    // camera.lookAt(scene.startRotX, scene.startRotY, scene.startRotZ);
    camera.lookAt(0, 0, 0);

    // Lights
    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 2); // Bright sky color, dim ground color
    light.position.set(0, 1, 0);
    threeScene.add(light);

    //
    //TODO: Remove OrbitControls and replace with WASD
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // AxesHelperV
    const axesHelper = new THREE.AxesHelper(5);
    threeScene.add(axesHelper);

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
      // controls.update(); // Uncomment if using OrbitControls
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
