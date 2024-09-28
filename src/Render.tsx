import Scene from "./Scene";
import N64_GEPD from "./renders/N64_GEPD";

export default function Render({ setupScene }: { setupScene: Scene }) {
  switch (setupScene.renderer) {
    case "N64_GEPD":
      return <N64_GEPD scene={setupScene} />;
      break;

    default:
      break;
  }
}
