import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import type { SceneConfig } from "../Video";

export const Scene5: React.FC<{ scene: SceneConfig }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const fade = interpolate(frame, [0, scene.animation.fadeIn, durationInFrames - scene.animation.fadeOut, durationInFrames], [0, 1, 1, 0]);
  const zoom = interpolate(frame, [0, durationInFrames], [1, scene.animation.zoom]);

  return (
    <AbsoluteFill style={{ backgroundColor: scene.backgroundColor, color: scene.textColor, opacity: fade, transform: `scale(${zoom})`, padding: 96, justifyContent: "center" }}>
      <h1 style={{ fontSize: 88, marginBottom: 16 }}>{scene.title}</h1>
      <h2 style={{ fontSize: 42, color: scene.accentColor }}>{scene.subtitle}</h2>
      <p style={{ fontSize: 38, lineHeight: 1.35, maxWidth: 880 }}>{scene.body}</p>
      <p style={{ marginTop: 30, fontSize: 46, fontWeight: 700 }}>{scene.bullets[0]}</p>
    </AbsoluteFill>
  );
};
