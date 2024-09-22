import Scene from "./Scene";
import ThreeSceneComponent from "./ThreeSceneComponent";

export default function Render({ setupScene }: { setupScene: Scene }) {
  return <ThreeSceneComponent scene={setupScene} />;
}
