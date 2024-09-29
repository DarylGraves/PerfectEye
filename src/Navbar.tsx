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
        height: "100vh",
      }}
    >
      <div
        style={{ padding: 0, margin: 0, flex: 1, overflowY: "hidden" }}
        className="primarycolor"
      >
        <h2
          className="secondarycolor"
          style={{
            marginBottom: 0,
            marginTop: 0,
            paddingTop: 10,
            paddingBottom: 10,
            borderBottom: "1px solid gray",
            fontFamily: "PDark",
            fontSize: "28px",
            position: "relative",
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
          justifyContent: "space-between",
          borderTop: "1px solid gray",
          padding: "10px 0",
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
