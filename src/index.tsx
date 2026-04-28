import React from "react";
import { registerRoot, Composition } from "remotion";
import { Video } from "./Video";
import sceneData from "../data/sceneData.json";

type SceneDataItem = {
  durationInFrames: number;
};

type SceneData = {
  fps: number;
  width: number;
  height: number;
  scenes: SceneDataItem[];
};

const data = sceneData as SceneData;

const totalDurationInFrames = data.scenes.reduce(
  (total: number, scene: SceneDataItem) => total + scene.durationInFrames,
  0
);

const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="VideoPrincipal"
      component={Video}
      durationInFrames={totalDurationInFrames}
      fps={data.fps}
      width={data.width}
      height={data.height}
    />
  );
};

registerRoot(RemotionRoot);
