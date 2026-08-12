import Konva from "konva";

import { useCanvasStore } from "../store/canvasStore";

import useDrawing from "./useDrawing";
import useEyedropper from "./useEyedropper";

export default function useCanvas() {
  const { tool, layers } = useCanvasStore();

  const drawing = useDrawing();
  const eyedropper = useEyedropper();

  const start = (stage: Konva.Stage) => {
    if (tool === "eyedropper") {
      eyedropper.pickColor(stage);
      return;
    }

    drawing.startDrawing(stage);
  };

  return {
    layers,

    startDrawing: start,
    draw: drawing.draw,
    endDrawing: drawing.endDrawing,
  };
}
