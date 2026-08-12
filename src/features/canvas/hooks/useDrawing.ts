import { useState } from "react";

import Konva from "konva";

import { useCanvasStore } from "../store/canvasStore";
import type { Stroke } from "../types/stroke";

export default function useDrawing() {
  const {
    tool,
    color,
    brushSize,
    opacity,

    layers,
    selectedLayerId,

    addStroke,
    updateStroke,
  } = useCanvasStore();

  const [isDrawing, setIsDrawing] = useState(false);

  // 현재 그리고 있는 Stroke ID
  const [currentStrokeId, setCurrentStrokeId] = useState<string | null>(null);

  const startDrawing = (stage: Konva.Stage) => {
    const point = stage.getPointerPosition();

    if (!point) return;

    // 현재 선택된 레이어 찾기
    const selectedLayer = layers.find((layer) => layer.id === selectedLayerId);

    // 레이어가 없거나 잠겨 있으면 그리지 않음
    if (!selectedLayer || selectedLayer.locked) {
      return;
    }

    const strokeId = crypto.randomUUID();

    const stroke: Stroke = {
      id: strokeId,

      // 현재 선택된 레이어
      layerId: selectedLayerId,

      // TODO: 로그인 구현 후 실제 사용자 ID로 교체
      authorId: "local-user",

      points: [point.x, point.y],

      color,
      strokeWidth: brushSize,
      opacity,

      tool,
    };

    addStroke(stroke);

    // 현재 그리고 있는 Stroke 기억
    setCurrentStrokeId(strokeId);

    setIsDrawing(true);
  };

  const draw = (stage: Konva.Stage) => {
    if (!isDrawing || !currentStrokeId) {
      return;
    }

    const point = stage.getPointerPosition();

    if (!point) return;

    // 현재 Stroke의 points 가져오기
    const currentLayer = layers.find((layer) => layer.id === selectedLayerId);

    if (!currentLayer) return;

    const currentStroke = currentLayer.strokes.find(
      (stroke) => stroke.id === currentStrokeId,
    );

    if (!currentStroke) return;

    const updatedPoints = [...currentStroke.points, point.x, point.y];

    updateStroke(currentStrokeId, updatedPoints);
  };

  const endDrawing = () => {
    setIsDrawing(false);
    setCurrentStrokeId(null);
  };

  return {
    startDrawing,
    draw,
    endDrawing,
  };
}
