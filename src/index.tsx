import React from "react";
import { registerRoot, Composition } from "remotion";
import { Video } from "./Video";
import sceneData from "../data/sceneData.json";

type SceneDataItem = {
  durationInFrames: number;
};

type SceneData = {
  video: {
    id: string;
    fps: number;
    width: number;
    height: number;
  };
  scenes: SceneDataItem[];
};

const data = sceneData as unknown as SceneData;

const totalDurationInFrames = data.scenes.reduce(
  (total: number, scene: SceneDataItem) => total + scene.durationInFrames,
  0
);

const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id={data.video.id}
      component={Video}
      durationInFrames={totalDurationInFrames}
      fps={data.video.fps}
      width={data.video.width}
      height={data.video.height}
    />
  );
};

registerRoot(RemotionRoot);
