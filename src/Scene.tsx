class Scene {
  name: string;
  startPosX: number;
  startPosY: number;

  constructor(name: string, startPosX: number, startPosY: number) {
    this.name = name;
    this.startPosX = startPosX;
    this.startPosY = startPosY;
  }
}

export default Scene;
