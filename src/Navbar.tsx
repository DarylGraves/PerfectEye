import { UnstyledButton } from "@mantine/core";
import { useState } from "react";
import { NavbarLinksGroup } from "./NavbarLinksGroup";
import Nostalgia from "./Nostalgia";
import Scene from "./Scene";

type NavbarProps = {
  onSceneChange: (scene: Scene) => void;
};

export default function Navbar({ onSceneChange }: NavbarProps) {
  // State for currentScene
  const [currentScene, setCurrentScene] = useState<Scene | null>(null);

  // Handler for updating the scene
  const handleSceneChange = (newScene: Scene) => {
    setCurrentScene(newScene);
    onSceneChange(newScene); // Notify parent if necessary
  };

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
        <NavbarLinksGroup onSceneChange={handleSceneChange} />
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
        <UnstyledButton style={{ outline: "none" }}>
          <Nostalgia setupScene={currentScene} />
        </UnstyledButton>
        <UnstyledButton>About (Doesn't work yet)</UnstyledButton>
      </div>
    </div>
  );
}

//TODO: 2 - Complete To Do with Info
