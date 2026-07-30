import { useState } from "react";

import Konva from "konva";

import { useCanvasStore } from "../store/canvasStore";
import type { Stroke } from "../types/stroke";

export default function useDrawing() {
  const { tool, color, brushSize, opacity, strokes, addStroke, setStrokes } =
    useCanvasStore();

  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (stage: Konva.Stage) => {
    const point = stage.getPointerPosition();

    if (!point) return;

    const stroke: Stroke = {
      id: crypto.randomUUID(),
      tool,
      color,
      strokeWidth: brushSize,
      opacity,
      points: [point.x, point.y],
    };

    addStroke(stroke);

    setIsDrawing(true);
  };

  const draw = (stage: Konva.Stage) => {
    if (!isDrawing) return;

    const point = stage.getPointerPosition();

    if (!point) return;

    const updated = [...strokes];

    updated[updated.length - 1] = {
      ...updated[updated.length - 1],
      points: [...updated[updated.length - 1].points, point.x, point.y],
    };

    setStrokes(updated);
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  return {
    startDrawing,
    draw,
    endDrawing,
  };
}
