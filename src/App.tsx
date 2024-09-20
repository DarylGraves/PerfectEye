import "./App.css";
import "@mantine/core/styles.css";
import {
  createTheme,
  MantineProvider,
  AppShell,
  AppShellHeader,
} from "@mantine/core";
import Navbar from "./Navbar";

const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
  defaultRadius: "md",
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <AppShell>
        <AppShellHeader>
          <div>TestHeader</div>
        </AppShellHeader>
        <AppShell.Navbar>
          <Navbar></Navbar>
          <div>TestNavbar</div>
        </AppShell.Navbar>
        <div>Hello, World!</div>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
