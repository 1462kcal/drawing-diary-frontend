// startDrawing();

// draw();

// endDrawing();

// undo();

// redo();

import { useState } from "react";
import type { Stroke } from "../types/stroke";
import Konva from "konva";

export default function useCanvas() {
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (stage: Konva.Stage) => {
    const point = stage.getPointerPosition();

    if (!point) return;

    const newStroke: Stroke = {
      id: crypto.randomUUID(),
      tool: "brush",
      color: "#000000",
      strokeWidth: 5,
      points: [point.x, point.y],
    };

    setStrokes((prev) => [...prev, newStroke]);
    setIsDrawing(true);
  };

  const draw = (stage: Konva.Stage) => {
    if (!isDrawing) return;

    const point = stage.getPointerPosition();

    if (!point) return;

    setStrokes((prev) => {
      const updated = [...prev];

      const lastStroke = updated[updated.length - 1];

      if (!lastStroke) return prev;

      lastStroke.points = [...lastStroke.points, point.x, point.y];

      return updated;
    });
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  return {
    strokes,
    startDrawing,
    draw,
    endDrawing,
  };
}
