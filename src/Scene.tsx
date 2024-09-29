class Scene {
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

  constructor(
    name: string,
    path: string,
    renderer: string,
    cameraclip: number,
    speed: number,
    skybox: string,
    startPosX: number,
    startPosY: number,
    startPosZ: number,
    startRotX: number,
    startRotY: number,
    startRotZ: number
  ) {
    this.name = name;
    this.path = path;
    this.renderer = renderer;
    this.cameraclip = cameraclip;
    this.speed = speed;
    this.skybox = skybox;
    this.startPosX = startPosX;
    this.startPosY = startPosY;
    this.startPosZ = startPosZ;
    this.startRotX = startRotX;
    this.startRotY = startRotY;
    this.startRotZ = startRotZ;
  }
}

export default Scene;
