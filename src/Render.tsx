import Scene from "./Scene";
import N64_GEPD from "./renders/N64_GEPD";
import UnrealTournament from "./renders/UnrealTournament";
import Doom from "./renders/Doom";
import ThreeJs from "./renders/ThreeJs";
import CounterStrike from "./renders/CounterStrike";

export default function Render({ setupScene }: { setupScene: Scene }) {
  switch (setupScene.renderer) {
    case "CounterStrike":
      return <CounterStrike scene={setupScene} />;
      break;
    case "ThreeJs":
      return <ThreeJs scene={setupScene} />;
      break;
    case "N64_GEPD":
      return <N64_GEPD scene={setupScene} />;
      break;
    case "UnrealTournament":
      return <UnrealTournament scene={setupScene} />;
      break;
    case "Doom":
      return <Doom scene={setupScene} />;
      break;
    default:
      break;
  }
}
