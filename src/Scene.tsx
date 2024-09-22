class Scene {
  name: string;
  path: string;
  renderer: string;
  startPosX: number;
  startPosY: number;

  constructor(
    name: string,
    path: string,
    renderer: string,
    startPosX: number,
    startPosY: number
  ) {
    this.name = name;
    this.path = path;
    this.renderer = renderer;
    this.startPosX = startPosX;
    this.startPosY = startPosY;
  }
}

export default Scene;
