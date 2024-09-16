// movement.js

import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";

let controls; // PointerLockControls instance
const moveSpeed = 0.35; // Movement speed
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const keys = { w: false, a: false, s: false, d: false }; // Track which keys are pressed
let isShiftPressed = false; // Track the state of the shift key

function initMovement(camera, domElement) {
  // Set up PointerLockControls for mouse-based camera movement
  controls = new PointerLockControls(camera, domElement);

  // Lock the pointer and start controlling the camera when the user clicks
  document.addEventListener("click", () => {
    controls.lock(); // Locks the pointer and enables FPS controls
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
      case "ShiftLeft": // Detect shift key
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
      case "ShiftLeft": // Detect shift key release
      case "ShiftRight":
        isShiftPressed = false;
        break;
    }
  });
}

function updateMovement(camera) {
  if (!controls || !controls.isLocked) {
    return;
  }

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
    velocity.addScaledVector(right, currentMoveSpeed); // Move right (strafe)
  }

  // Apply the velocity to move the camera
  controls.getObject().position.add(velocity); // Update the camera position
}

function isControlsLocked() {
  return controls && controls.isLocked;
}

export { initMovement, updateMovement, isControlsLocked };
