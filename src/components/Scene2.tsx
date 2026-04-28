import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import type { SceneConfig } from "../Video";

export const Scene2: React.FC<{ scene: SceneConfig }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const opacity = interpolate(frame, [0, scene.animation.fadeIn, durationInFrames - scene.animation.fadeOut, durationInFrames], [0, 1, 1, 0]);
  const x = interpolate(frame, [0, 40], [-120, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: scene.backgroundColor, color: scene.textColor, opacity, padding: 88 }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(-25deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 4px, transparent 4px, transparent 24px)" }} />
      <div style={{ transform: `translateX(${x}px)` }}>
        <h1 style={{ fontSize: 80, marginBottom: 20 }}>{scene.title}</h1>
        <h2 style={{ fontSize: 40, color: scene.accentColor }}>{scene.subtitle}</h2>
        <p style={{ fontSize: 38, lineHeight: 1.3 }}>{scene.body}</p>
        {scene.bullets.map((b) => (
          <p key={b} style={{ fontSize: 34, fontWeight: 700 }}>• {b}</p>
        ))}
      </div>
    </AbsoluteFill>
  );
};
