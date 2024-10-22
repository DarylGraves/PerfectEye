import React, { useRef, useEffect } from "react";

const BootUpCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // UseRef for cursor tracking to ensure persistence across renders
  const cursorX = useRef(20);
  const cursorY = useRef(50);

  const intervalRef = useRef<number | null>(null); // Track the interval to ensure it's cleared
  const cursorBlinkRef = useRef<number | null>(null); // Track cursor blink interval

  const cursorVisible = useRef(true); // Track if the cursor is visible or not

  useEffect(() => {
    cursorX.current = 20;
    cursorY.current = 50;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size dynamically
    canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;

    // Set the entire background to black
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Clear the canvas with black

    console.log(
      `Canvas initialized. cursorX: ${cursorX.current}, cursorY: ${cursorY.current}`
    );

    // Function to draw the cursor as a small rectangle
    const drawCursor = () => {
      if (cursorVisible.current) {
        ctx.fillStyle = "white";
        ctx.fillRect(cursorX.current, cursorY.current - 16, 10, 20); // Adjust cursor size as needed
      } else {
        // Clear the area where the cursor was and repaint it black to avoid gray fill
        ctx.fillStyle = "black";
        ctx.fillRect(cursorX.current, cursorY.current - 16, 10, 20); // Clear with black background
      }
      cursorVisible.current = !cursorVisible.current; // Toggle cursor visibility
    };

    // Start cursor blinking
    cursorBlinkRef.current = setInterval(drawCursor, 500); // Blink every 500ms

    // Function to display text character by character with a delay
    const displayText = (text: string, delay: number = 100): Promise<void> => {
      return new Promise((resolve) => {
        let i = 0;

        // Clear any previous intervals before starting a new one
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
          if (i < text.length) {
            ctx.fillStyle = "white";
            ctx.font = "16px RetroFont";

            // Clear the cursor area and repaint it black to avoid any leftover artifacts
            ctx.fillStyle = "black";
            ctx.fillRect(cursorX.current, cursorY.current - 16, 10, 20);

            // Draw the current character at the cursor position
            const char = text[i];
            ctx.fillStyle = "white"; // Switch back to white for text
            ctx.fillText(char, cursorX.current, cursorY.current);

            // Measure the width of the character and update cursorX
            const charWidth = ctx.measureText(char).width;
            cursorX.current += charWidth;

            i++; // Move to the next character
          } else {
            clearInterval(intervalRef.current!); // Stop the interval when done
            intervalRef.current = null; // Reset the interval
            resolve(); // Resolve the promise when done
          }
        }, delay);
      });
    };

    // Function to display a full line of text at once
    const displayLine = (
      text: string,
      delayBeforeNext: number = 0, // Delay before triggering the next line
      preventNewLine: boolean = false, // Flag to prevent new line after displaying
      startNewLineBefore: boolean = false // Flag to start a new line before printing
    ): Promise<void> => {
      return new Promise((resolve) => {
        // Clear the canvas area before drawing the text to prevent overlap
        ctx.fillStyle = "black";
        ctx.fillRect(
          cursorX.current,
          cursorY.current - 16,
          ctx.measureText(text).width,
          20
        ); // Fill with black to ensure no artifacts remain

        // Move cursor to a new line before printing if required
        if (startNewLineBefore) {
          cursorX.current = 20; // Reset X to start of the line
          cursorY.current += 20; // Move Y position to the next line
        }

        // Set the text style
        ctx.fillStyle = "white";
        ctx.font = "16px RetroFont";

        // Print the text at the current cursor position
        ctx.fillText(text, cursorX.current, cursorY.current);

        // Update cursor based on the full text width
        const textWidth = ctx.measureText(text).width;
        cursorX.current += textWidth;

        // Move to a new line only if `preventNewLine` is false
        if (!preventNewLine) {
          cursorX.current = 20; // Reset X to start of the line
          cursorY.current += 20; // Move Y position to the next line
        }

        // Wait for the delay and then resolve the promise
        setTimeout(() => {
          resolve(); // Resolve the promise after the delay
        }, delayBeforeNext);
      });
    };

    const displayNumberSequence = (
      start: number,
      end: number,
      delay: number = 100 // Delay between number increments
    ): Promise<void> => {
      return new Promise((resolve) => {
        let currentNumber = start;

        // Set an interval to iterate over the numbers
        const interval = setInterval(() => {
          // Clear the area where the number is displayed to avoid overlap
          const numberWidth = ctx.measureText(currentNumber.toString()).width;
          ctx.fillStyle = "black";
          ctx.fillRect(cursorX.current, cursorY.current - 16, numberWidth, 20); // Fill black before drawing

          // Print the current number at the same X coordinate
          ctx.fillStyle = "white";
          ctx.font = "16px RetroFont";
          ctx.fillText(
            currentNumber.toString(),
            cursorX.current,
            cursorY.current
          );

          currentNumber++;

          // If the sequence has reached the end
          if (currentNumber > end) {
            clearInterval(interval);

            // After the final number is printed, move the cursor to the right
            const finalNumberWidth = ctx.measureText(
              (currentNumber - 1).toString()
            ).width;
            cursorX.current += finalNumberWidth; // Move cursor X to account for the width of the last number

            resolve(); // Resolve the promise when the sequence is done
          }
        }, delay);
      });
    };

    const clearScreen = (): void => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Clear the entire canvas and fill with black
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      cursorX.current = 20;
      cursorY.current = 50;
    };

    // Main boot-up sequence
    const bootUpSequence = async () => {
      await displayLine("PENTIUM-MMX CPU at 200MHz", 1000);
      await displayLine("Memory Test: ", 0, true); // Single line, prevent new line
      await displayNumberSequence(0, 256, 1); // Number sequence
      await displayLine("MB OK", 200); // Text after the number sequence
      await displayLine("");
      await displayLine("Award Plug and Play BIOS Extension   v1.0A", 1000);
      await displayLine("Copyright (C) 1997, Award Software, Inc.", 1000);
      await displayLine("  Detecting HDD Primary Master ... ", 1000, true);
      await displayLine("WDC AC34000L", 200);
      await displayLine("", 400);
      await clearScreen();
      await displayLine("Starting MS-DOS...", 1700);
      await displayLine("");
      await displayLine("C:\\>", 1000, true);
      await displayText("cd cooltools\\perfecteye", 150);
      await displayLine("C:\\cooltools\\perfecteye>", 750, true, true);
      await displayText("perfecteye.exe", 200);
      await displayLine("", 500);
      await clearScreen();

      await displayLine(
        "    ____  __________  ________________________   ________  ________"
      );
      await displayLine(
        "   / __ \\/ ____/ __ \\/ ____/ ____/ ____/_  __/  / ____/\\ \\/ / ____/"
      );
      await displayLine(
        "  / /_/ / __/ / /_/ / /_  / __/ / /     / /    / __/    \\  / __/   "
      );
      await displayLine(
        " / ____/ /___/ _, _/ __/ / /___/ /___  / /    / /___    / / /___   "
      );
      await displayLine(
        "/_/   /_____/_/ |_/_/   /_____ \\____/ /_/    /_____/   /_/_____/   "
      );

      await displayLine("");
      await displayLine("Select an option on the left to begin.");
      await displayLine("Once loaded, click the window to take control.");
      await displayLine(
        "Use the WASD keys to move, shift to double speed and the mouse wheel to change speed. Push esc to reclaim the mouse."
      );
    };

    // Start sequence after a small delay
    const timeoutId = setTimeout(bootUpSequence, 500);

    // Cleanup: Clear intervals on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (cursorBlinkRef.current) {
        clearInterval(cursorBlinkRef.current); // Clear the cursor blinking interval
      }
      clearTimeout(timeoutId); // Cleanup timeout to avoid running after unmount
    };
  }, []); // Empty dependency array ensures `useEffect` only runs once

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        paddingLeft: "200px", // This is hardcoded but is navBarWidth in App.tsx
        margin: 0,
        border: "none",
        display: "block",
      }}
    />
  );
};

export default BootUpCanvas;
