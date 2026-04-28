import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { SceneConfig } from "../Video";

export const Scene1: React.FC<{ scene: SceneConfig }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const opacity = interpolate(frame, [0, scene.animation.fadeIn, durationInFrames - scene.animation.fadeOut, durationInFrames], [0, 1, 1, 0]);
  const zoom = interpolate(frame, [0, durationInFrames], [1, scene.animation.zoom]);
  const pulse = spring({ fps, frame, config: { damping: 120, stiffness: 180 } });

  return (
    <AbsoluteFill style={{ backgroundColor: scene.backgroundColor, color: scene.textColor, opacity, transform: `scale(${zoom})`, padding: 90, justifyContent: "space-between" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(0,0,0,0.4))" }} />
      <div style={{ position: "absolute", right: 90, top: 120, color: scene.accentColor, fontSize: 96, transform: `scale(${0.8 + pulse * 0.3})` }}>✶</div>
      <h1 style={{ fontSize: 86, lineHeight: 1.05, margin: 0, zIndex: 2 }}>{scene.title}</h1>
      <h2 style={{ fontSize: 42, color: scene.accentColor, marginTop: 24, zIndex: 2 }}>{scene.subtitle}</h2>
      <p style={{ fontSize: 44, maxWidth: 860, zIndex: 2 }}>{scene.body}</p>
      <p style={{ fontSize: 36, fontWeight: 700, letterSpacing: 1, zIndex: 2 }}>{scene.bullets[0]}</p>
    </AbsoluteFill>
  );
};
