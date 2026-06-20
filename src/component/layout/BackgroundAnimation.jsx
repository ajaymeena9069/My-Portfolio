import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundAnimation() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div 
      className="particles-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        backgroundColor: 'var(--bg-color)',
        pointerEvents: 'none', // Allow clicks to pass through to underlying elements
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window", // Important! Tracks mouse globally across the window
            events: {
              onHover: {
                enable: true,
                mode: "grab", // Draws lines to the mouse
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200, // How close mouse needs to be to grab
                links: {
                  opacity: 0.5,
                  color: "#00abf0", // Cyan grab lines
                },
              },
            },
          },
          particles: {
            color: {
              value: "#00abf0", // Cyan dots
            },
            links: {
              color: "#ffffff", // White lines between dots
              distance: 120,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100, // Number of dots
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 }, // Size of dots
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none" // Must be none to not block UI
        }}
      />
    </div>
  );
}
