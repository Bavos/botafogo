import { registerRoot, Composition } from "remotion";
import { Video } from "./Video";
import sceneData from "../data/sceneData.json";

const totalDurationInFrames = sceneData.scenes.reduce(
  (total, scene) => total + scene.durationInFrames,
  0
);

const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="VideoPrincipal"
      component={Video}
      durationInFrames={totalDurationInFrames}
      fps={sceneData.fps}
      width={sceneData.width}
      height={sceneData.height}
    />
  );
};

registerRoot(RemotionRoot);
