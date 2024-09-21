import Scene from "./Scene";

type RenderProps = {
  setupScene: Scene;
};
export default function Render({ setupScene }: RenderProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>Loading {setupScene.name}... </div>
    </div>
  );
}
