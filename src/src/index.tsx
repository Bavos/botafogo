import React from "react";
import { registerRoot, Composition } from "remotion";
import sceneData from "../data/sceneData.json";
import { Video, getTotalDuration } from "./Video";

const Root: React.FC = () => {
  return (
    <Composition
      id="VideoPrincipal"
      component={Video}
      durationInFrames={getTotalDuration()}
      fps={sceneData.video.fps}
      width={sceneData.video.width}
      height={sceneData.video.height}
    />
  );
};

registerRoot(Root);
