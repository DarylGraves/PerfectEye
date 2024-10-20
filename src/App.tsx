import "./App.css";
import "@mantine/core/styles.css";
import {
  createTheme,
  MantineProvider,
  AppShell,
  AppShellHeader,
} from "@mantine/core";
import Render from "./Render";
import Navbar from "./Navbar";
import Scene from "./Scene";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

const theme = createTheme({
  fontFamily: "RetroFont, Montserrat, sans-serif",
  defaultRadius: "md",
});

function App() {
  const [currentScene, setCurrentScene] = useState<Scene | null>(null); // Initialize with null

  //TODO: 2 - Navbar that collapses:
  // const [navBarWidth, setNavbarWidth] = useState(200);
  const navBarWidth = 200;

  return (
    <MantineProvider theme={theme} forceColorScheme="dark">
      <AppShell style={{ overflow: "hidden" }}>
        <AppShellHeader
          style={{
            marginLeft: navBarWidth, // Centers based on navbar
            height: "25px",
          }}
        >
          <div
            className="primarycolor"
            style={{ minHeight: "25px", borderBottom: "1px solid gray" }}
          >
            {currentScene
              ? currentScene.name +
                " - Use WASD to move, shift to run and the mouse-wheel to change speed"
              : ""}
          </div>
        </AppShellHeader>
        <AppShell.Navbar
          style={{ width: navBarWidth, position: "fixed", height: "100vh" }}
        >
          <Navbar onSceneChange={setCurrentScene} />
        </AppShell.Navbar>
        <AppShell.Main
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: navBarWidth, // Centers based on navbar
            height: "calc(100vh - 25px)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              marginLeft: navBarWidth,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {currentScene ? (
              <Render setupScene={currentScene!} />
            ) : (
              // "Select a map from the left to begin"
              <LoadingScreen />
            )}
          </div>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
