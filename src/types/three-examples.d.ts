declare module 'three/examples/jsm/controls/PointerLockControls' {
  import { Camera, EventDispatcher, Vector3 } from 'three';

  export class PointerLockControls extends EventDispatcher {
    constructor(camera: Camera, domElement: HTMLElement);
    domElement: HTMLElement;
    isLocked: boolean;
    getObject(): Camera;
    lock(): void;
    unlock(): void;
    moveForward(distance: number): void;
    moveRight(distance: number): void;
    getDirection(v: Vector3): Vector3;
  }
}

declare module 'three/examples/jsm/loaders/GLTFLoader' {
  import * as THREE from 'three';

  export class GLTFLoader {
    load(
      url: string,
      onLoad: (gltf: any) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}
