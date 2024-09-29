import { UnstyledButton } from "@mantine/core";
import { NavbarLinksGroup } from "./NavbarLinksGroup";
import Scene from "./Scene";

type NavbarProps = {
  onSceneChange: (Scene: Scene) => void; // Use Scene class as a type
};

export default function Navbar({ onSceneChange }: NavbarProps) {
  return (
    <div
      className="primarycolor"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div style={{ padding: 0, margin: 0 }} className="secondarycolor">
        <h2
          className="secondarycolor"
          style={{
            marginBottom: 0,
            marginTop: 10,
            paddingBottom: 10,
            borderBottom: "1px solid gray",
            fontFamily: "PDark",
            fontSize: "28px",
          }}
        >
          PerfectEye
        </h2>
        <NavbarLinksGroup onSceneChange={onSceneChange} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderTop: "1px solid gray",
        }}
      >
        <UnstyledButton>To Do</UnstyledButton>
        <UnstyledButton>To Do</UnstyledButton>
      </div>
    </div>
  );
}

//TODO: Nostalgia Music
//TODO: More Info
