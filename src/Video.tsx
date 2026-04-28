import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import sceneData from "../data/sceneData.json";
import { Scene1 } from "./components/Scene1";
import { Scene2 } from "./components/Scene2";
import { Scene3 } from "./components/Scene3";
import { Scene4 } from "./components/Scene4";
import { Scene5 } from "./components/Scene5";

export type SceneConfig = {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  body: string;
  bullets: string[];
  durationInFrames: number;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  imagePrompt: string;
  imageUrl: string;
  animation: {
    fadeIn: number;
    fadeOut: number;
    slideDirection: string;
    zoom: number;
    delay: number;
    duration: number;
    easing: string;
  };
  transition: string;
  layout: string;
};

const scenes = sceneData.scenes as SceneConfig[];

const pickScene = (scene: SceneConfig) => {
  if (scene.id === "scene-1") return <Scene1 scene={scene} />;
  if (scene.id === "scene-2") return <Scene2 scene={scene} />;
  if (scene.id === "scene-3") return <Scene3 scene={scene} />;
  if (scene.id === "scene-4") return <Scene4 scene={scene} />;
  return <Scene5 scene={scene} />;
};

export const getTotalDuration = (): number => scenes.reduce((acc, s) => acc + s.durationInFrames, 0);

export const Video: React.FC = () => {
  let from = 0;

  return (
    <AbsoluteFill>
      {scenes.map((scene) => {
        const start = from;
        from += scene.durationInFrames;
        return (
          <Sequence key={scene.id} from={start} durationInFrames={scene.durationInFrames}>
            {pickScene(scene)}
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
