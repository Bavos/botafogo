import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import type { SceneConfig } from "../Video";

export const Scene3: React.FC<{ scene: SceneConfig }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const opacity = interpolate(frame, [0, scene.animation.fadeIn, durationInFrames - scene.animation.fadeOut, durationInFrames], [0, 1, 1, 0]);
  const zoom = interpolate(frame, [0, durationInFrames], [1, scene.animation.zoom]);

  return (
    <AbsoluteFill style={{ backgroundColor: scene.backgroundColor, color: scene.textColor, opacity, transform: `scale(${zoom})`, padding: 90 }}>
      <h1 style={{ fontSize: 82, margin: 0 }}>{scene.title}</h1>
      <h2 style={{ fontSize: 40, color: scene.accentColor }}>{scene.subtitle}</h2>
      <p style={{ fontSize: 39, lineHeight: 1.35 }}>{scene.body}</p>
      <div style={{ display: "flex", gap: 20 }}>
        {scene.bullets.map((b) => (
          <div key={b} style={{ border: `2px solid ${scene.accentColor}`, padding: "12px 16px", fontSize: 30 }}>{b}</div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
