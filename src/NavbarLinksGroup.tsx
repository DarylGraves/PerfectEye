import { useState } from "react";
import { Group, Box, Collapse, Text, UnstyledButton } from "@mantine/core";
import classes from "./NavbarLinksGroup.module.css";
import content from "./data/content.json";
import Scene from "./Scene"; // Import Scene correctly
import "./App.css";

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
    cameraclip: number;
    skybox: string;
    speed: number;
    startPosX: number;
    startPosY: number;
    startPosZ: number;
    startRotX: number;
    startRotY: number;
    startRotZ: number;
  }[];
  onSceneChange: (scene: Scene) => void;
  opened: boolean; // Prop to control opened state
  onToggle: () => void; // Prop to handle toggling
}

export function LinksGroup({
  label,
  links,
  onSceneChange,
  opened,
  onToggle,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);

  const items = (hasLinks ? links : [])
    .sort((a, b) => a.label.localeCompare(b.label))
    .map((link) => (
      <Text<"a">
        component="a"
        style={{
          cursor: "pointer",
          wordWrap: "normal",
          borderLeft: "0px",
          paddingLeft: "18px",
          paddingRight: "0px",
          paddingTop: "5px",
          paddingBottom: "5px",
          marginLeft: "0px",
          fontSize: "14px",
          borderBottom: "1px solid gray",
        }}
        className={`${classes.control} secondarycolor`}
        key={link.label}
        onClick={(event) => {
          event.preventDefault();
          const newScene = new Scene(
            link.label,
            link.path,
            link.renderer,
            link.cameraclip,
            link.speed,
            link.skybox,
            link.startPosX,
            link.startPosY,
            link.startPosZ,
            link.startRotX,
            link.startRotY,
            link.startRotZ
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
        onClick={onToggle}
        className={`${classes.control} primarycolor`}
        style={{
          borderRadius: 0,
          borderBottom: "1px solid gray",
          borderTop: "0px solid gray",
          paddingLeft: "0px",
          paddingTop: "5px",
          paddingBottom: "5px",
          fontSize: "16px",
          outline: "none",
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
      {hasLinks && (
        <div
          style={{
            overflowY: "auto",
            maxHeight: "calc(100vh - 366px)",
            overflowX: "hidden",
          }}
        >
          <Collapse
            in={opened}
            style={{
              textAlign: "left",
            }}
          >
            {items}
          </Collapse>
        </div>
      )}
    </>
  );
}

export function NavbarLinksGroup({ onSceneChange }: NavbarLinksGroupProps) {
  const [openedGroup, setOpenedGroup] = useState<string | null>(null);

  const handleToggle = (label: string) => {
    setOpenedGroup((prev) => (prev === label ? null : label));
  };

  return (
    <Box mih={220}>
      {content.map((game) => (
        <LinksGroup
          key={game.label}
          label={game.label}
          links={game.links}
          onSceneChange={onSceneChange}
          opened={openedGroup === game.label} // Control open state based on the label
          onToggle={() => handleToggle(game.label)} // Toggle the clicked group
        />
      ))}
    </Box>
  );
}
