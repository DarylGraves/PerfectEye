import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

// Declare controls and state variables
let controls: PointerLockControls;
const moveSpeed = 0.35; // Movement speed
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const keys = { w: false, a: false, s: false, d: false }; // Track keypress states
let isShiftPressed = false; // Track shift key state

// Initialize movement controls
export function initMovement(
  camera: THREE.PerspectiveCamera,
  domElement: HTMLElement
): void {
  controls = new PointerLockControls(camera, domElement);

  // Lock the pointer when clicked
  document.addEventListener("click", () => {
    controls.lock();
  });

  // Handle keydown events
  document.addEventListener("keydown", (event: KeyboardEvent) => {
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
      case "ShiftLeft": // Detect shift key press
      case "ShiftRight":
        isShiftPressed = true;
        break;
    }
  });

  // Handle keyup events
  document.addEventListener("keyup", (event: KeyboardEvent) => {
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
      case "ShiftLeft": // Detect shift key release
      case "ShiftRight":
        isShiftPressed = false;
        break;
    }
  });
}

// Update movement every frame
export function updateMovement(camera: THREE.PerspectiveCamera): void {
  if (!controls || !controls.isLocked) return;

  // Reset velocity
  velocity.set(0, 0, 0);

  // Get the camera's forward direction (for W and S)
  camera.getWorldDirection(direction);

  // Adjust speed if shift is pressed (running)
  const currentMoveSpeed = isShiftPressed ? moveSpeed * 2 : moveSpeed;

  // Move forward/backward
  if (keys.w) velocity.addScaledVector(direction, currentMoveSpeed); // Forward
  if (keys.s) velocity.addScaledVector(direction, -currentMoveSpeed); // Backward

  // Get the camera's right direction (for A and D)
  const right = new THREE.Vector3();
  camera.getWorldDirection(right).cross(camera.up).normalize(); // Right direction perpendicular to camera up

  // Move left/right (strafe)
  if (keys.a) velocity.addScaledVector(right, -currentMoveSpeed); // Left
  if (keys.d) velocity.addScaledVector(right, currentMoveSpeed); // Right

  // Apply velocity to the camera's position
  controls.getObject().position.add(velocity);
}

// Check if the pointer controls are locked
export function isControlsLocked(): boolean {
  return controls && controls.isLocked;
}
