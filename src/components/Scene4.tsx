import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import type { SceneConfig } from "../Video";

export const Scene4: React.FC<{ scene: SceneConfig }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const opacity = interpolate(frame, [0, scene.animation.fadeIn, durationInFrames - scene.animation.fadeOut, durationInFrames], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: scene.backgroundColor, color: scene.textColor, opacity, padding: 82 }}>
      <h1 style={{ fontSize: 74, margin: 0 }}>{scene.title}</h1>
      <h2 style={{ fontSize: 38, color: scene.accentColor }}>{scene.subtitle}</h2>
      <p style={{ fontSize: 32, lineHeight: 1.4 }}>{scene.body}</p>
      <div style={{ marginTop: 12 }}>
        {scene.bullets.map((b, i) => {
          const start = 20 + i * 20;
          const itemOpacity = interpolate(frame, [start, start + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const y = interpolate(frame, [start, start + 12], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return <p key={b} style={{ opacity: itemOpacity, transform: `translateY(${y}px)`, fontSize: 31, margin: "10px 0" }}>• {b}</p>;
        })}
      </div>
      <div style={{ position: "absolute", right: 80, bottom: 120, fontSize: 130, color: scene.accentColor, fontWeight: 800 }}>5 x 2</div>
    </AbsoluteFill>
  );
};
