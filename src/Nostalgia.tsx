import { useState, useEffect } from "react";
import Scene from "./Scene";

export default function Nostalgia({
  setupScene,
}: {
  setupScene: Scene | null;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [audioFilePath, setAudioFilePath] = useState<string>("");
  const [currentGame, setCurrentGame] = useState<string | null>(null); // Track the current game

  // Update audioFilePath based on setupScene
  useEffect(() => {
    if (setupScene && setupScene.path) {
      const game = setupScene.path.split("/").filter(Boolean)[0];

      // If the game has changed, update the audio path and reset the current game
      if (game !== currentGame) {
        setCurrentGame(game); // Track the new game

        switch (game) {
          case "Perfect Dark":
            setAudioFilePath("/assets/Music/Perfect Dark.mp3");
            break;
          case "GoldenEye":
            setAudioFilePath("/assets/Music/GoldenEye.mp3");
            break;
          case "Unreal Tournament":
            setAudioFilePath("/assets/Music/Unreal Tournament.mp3");
            break;
          default:
            setAudioFilePath(""); // Reset the audio file path for unknown cases
            break;
        }
      }
    } else {
      setAudioFilePath("");
    }
  }, [setupScene, currentGame]);

  // Reset audio and progress only when the game changes
  useEffect(() => {
    if (setupScene && setupScene.path) {
      const game = setupScene.path.split("/").filter(Boolean)[0];

      // Only reset audio if the game has changed, not if just the scene has changed
      if (game !== currentGame) {
        if (audio) {
          audio.pause();
          setIsPlaying(false);
          setProgress(0);
          setAudio(null); // Clean up the audio object when game changes
        }
      }
    }
  }, [setupScene, currentGame, audio]); // Only run this effect when the game or audio changes

  // Handle audio playback on click
  const handleClick = async () => {
    if (!isPlaying && audioFilePath) {
      try {
        const response = await fetch(audioFilePath);
        const contentLength = response.headers.get("content-length");
        if (!response.ok || !contentLength)
          throw new Error("Failed to fetch audio");

        const totalSize = parseInt(contentLength, 10);
        let loaded = 0;

        // Read file in chunks for progress tracking
        const reader = response.body?.getReader();
        const chunks: Uint8Array[] = [];
        while (true) {
          const { done, value } = await reader?.read()!;
          if (done) break;
          chunks.push(value);
          loaded += value.length;

          // Update progress
          setProgress(Math.floor((loaded / totalSize) * 100));
        }

        // Create a Blob from the file and play it
        const audioBlob = new Blob(chunks, { type: "audio/mp3" });
        const audioUrl = URL.createObjectURL(audioBlob);
        const newAudio = new Audio(audioUrl);
        newAudio.play();
        setAudio(newAudio);
        setIsPlaying(true);

        // Cleanup when the audio ends
        newAudio.onended = () => {
          setIsPlaying(false);
          setProgress(0);
        };
      } catch (error) {
        console.error("Error downloading or playing the audio:", error);
      }
    } else if (audio) {
      // Stop the audio if it's already playing
      audio.pause();
      setIsPlaying(false);
    }
  };

  // Render the button with progress and playing state
  return (
    <div
      onClick={handleClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      <div>
        Nostalgia Music{" "}
        {progress > 0 && progress < 100 ? ` (${progress}%)` : ""}
      </div>
      <div>{isPlaying ? "🔊" : "🔇"}</div>
    </div>
  );
}
