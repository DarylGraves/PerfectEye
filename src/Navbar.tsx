import { NavbarLinksGroup } from "./NavbarLinksGroup";
import Scene from "./Scene";

type NavbarProps = {
  onSceneChange: (Scene: Scene) => void; // Use Scene class as a type
};

export default function Navbar({ onSceneChange }: NavbarProps) {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <h2
        style={{
          borderBottom: "1px solid grey",
          paddingBottom: 19.92,
          marginBottom: 0,
        }}
      >
        PerfectEye
      </h2>
      <NavbarLinksGroup onSceneChange={onSceneChange} />
    </div>
  );
}
