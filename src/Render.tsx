import Scene from "./Scene";
import N64_GEPD from "./renders/N64_GEPD";
import UnrealTournament from "./renders/UnrealTournament";

export default function Render({ setupScene }: { setupScene: Scene }) {
  switch (setupScene.renderer) {
    case "N64_GEPD":
      return <N64_GEPD scene={setupScene} />;
      break;
    case "UnrealTournament":
      return <UnrealTournament scene={setupScene} />;
      break;
    default:
      break;
  }
}
