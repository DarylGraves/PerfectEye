import { useState } from "react";
import { Group, Box, Collapse, Text, UnstyledButton } from "@mantine/core";
import classes from "./NavbarLinksGroup.module.css";
import content from "./data/content.json";
import Scene from "./Scene"; // Import Scene correctly

type NavbarLinksGroupProps = {
  onSceneChange: (scene: Scene) => void;
};

interface LinksGroupProps {
  label: string;
  initiallyOpened?: boolean;
  links?: {
    label: string;
    path: string;
    renderer: string;
    skybox: string;
    speed: number;
    startPosX: number;
    startPosY: number;
    startPosZ: number;
    startRotX: number;
    startRotY: number;
    startRotZ: number;
  }[];
  onSceneChange: (scene: Scene) => void; // Use Scene type correctly
}

export function LinksGroup({
  label,
  initiallyOpened,
  links,
  onSceneChange,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const items = (hasLinks ? links : []).map((link) => (
    <Text<"a">
      component="a"
      style={{ cursor: "pointer" }}
      className={classes.link}
      key={link.label}
      onClick={(event) => {
        event.preventDefault();
        const newScene = new Scene(
          link.label,
          link.path,
          link.renderer,
          link.speed,
          link.skybox,
          link.startPosX,
          link.startPosY,
          link.startPosZ,
          link.startRotX,
          link.startRotX,
          link.startRotX
        );
        onSceneChange(newScene);
      }}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
        style={{
          borderRadius: 0,
          borderBottom: "1px solid gray",
        }}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box ml="md">
              <h4 style={{ margin: 0 }}>{label}</h4>
            </Box>
          </Box>
        </Group>
      </UnstyledButton>
      {hasLinks ? (
        <Collapse in={opened} style={{ textAlign: "left" }}>
          {items}
        </Collapse>
      ) : null}
    </>
  );
}

export function NavbarLinksGroup({ onSceneChange }: NavbarLinksGroupProps) {
  return (
    <Box mih={220}>
      {content.map((game) => (
        <LinksGroup key={game.label} {...game} onSceneChange={onSceneChange} />
      ))}
    </Box>
  );
}
