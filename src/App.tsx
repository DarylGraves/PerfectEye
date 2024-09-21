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

const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
  defaultRadius: "md",
});

function App() {
  const [currentScene, setCurrentScene] = useState<Scene | null>(null); // Initialize with null

  return (
    <MantineProvider theme={theme} forceColorScheme="dark">
      <AppShell>
        <AppShellHeader>
          <div>TestHeader</div>
        </AppShellHeader>
        <AppShell.Navbar>
          <Navbar onSceneChange={setCurrentScene} />
        </AppShell.Navbar>
        <div>
          {currentScene ? (
            <Render setupScene={currentScene} /> // Render the scene if available
          ) : (
            "Select a scene"
          )}
        </div>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
