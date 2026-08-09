import { create } from "zustand";

import type { Stroke } from "../types/stroke";
import type { Tool } from "../types/tool";
import type { CanvasLayer } from "../types/layer";

interface CanvasStore {
  // ===========================
  // Tool
  // ===========================

  tool: Tool;
  setTool: (tool: Tool) => void;

  // ===========================
  // Brush
  // ===========================

  color: string;
  brushSize: number;
  opacity: number;

  setColor: (color: string) => void;
  setBrushSize: (size: number) => void;
  setOpacity: (opacity: number) => void;

  // ===========================
  // Layer
  // ===========================

  layers: CanvasLayer[];
  selectedLayerId: string;

  addLayer: () => void;
  removeLayer: (layerId: string) => void;
  selectLayer: (layerId: string) => void;

  // ===========================
  // Stroke
  // ===========================

  addStroke: (stroke: Stroke) => void;
  updateStroke: (strokeId: string, points: number[]) => void;

  // ===========================
  // History
  // ===========================

  undoStack: Stroke[];
  redoStack: Stroke[];

  undo: () => void;
  redo: () => void;

  // ===========================
  // Recent Colors
  // ===========================

  recentColors: string[];
  addRecentColor: (color: string) => void;
}

const createLayer = (name: string): CanvasLayer => ({
  id: crypto.randomUUID(),
  name,
  visible: true,
  locked: false,
  strokes: [],
});

export const useCanvasStore = create<CanvasStore>((set) => {
  const initialLayer = createLayer("Layer 1");

  return {
    // ===========================
    // Tool
    // ===========================

    tool: "pen",

    setTool: (tool) =>
      set({
        tool,
      }),

    // ===========================
    // Brush
    // ===========================

    color: "#000000",

    brushSize: 5,

    opacity: 100,

    setColor: (color) =>
      set({
        color,
      }),

    setBrushSize: (brushSize) =>
      set({
        brushSize,
      }),

    setOpacity: (opacity) =>
      set({
        opacity,
      }),

    // ===========================
    // Layer
    // ===========================

    layers: [initialLayer],

    selectedLayerId: initialLayer.id,

    addLayer: () =>
      set((state) => {
        const newLayer = createLayer(`Layer ${state.layers.length + 1}`);

        return {
          layers: [...state.layers, newLayer],
          selectedLayerId: newLayer.id,
        };
      }),

    removeLayer: (layerId) =>
      set((state) => {
        // 최소 하나의 레이어 유지
        if (state.layers.length <= 1) {
          return state;
        }

        const layerIndex = state.layers.findIndex(
          (layer) => layer.id === layerId,
        );

        if (layerIndex === -1) {
          return state;
        }

        const newLayers = state.layers.filter((layer) => layer.id !== layerId);

        let newSelectedLayerId = state.selectedLayerId;

        // 현재 선택된 레이어를 삭제한 경우
        if (state.selectedLayerId === layerId) {
          const nextLayer = newLayers[layerIndex] ?? newLayers[layerIndex - 1];

          newSelectedLayerId = nextLayer.id;
        }

        return {
          layers: newLayers,
          selectedLayerId: newSelectedLayerId,
        };
      }),

    selectLayer: (layerId) =>
      set((state) => {
        const exists = state.layers.some((layer) => layer.id === layerId);

        if (!exists) {
          return state;
        }

        return {
          selectedLayerId: layerId,
        };
      }),

    // ===========================
    // Stroke
    // ===========================

    addStroke: (stroke) =>
      set((state) => {
        const updatedLayers = state.layers.map((layer) => {
          if (layer.id !== state.selectedLayerId) {
            return layer;
          }

          if (layer.locked) {
            return layer;
          }

          return {
            ...layer,
            strokes: [...layer.strokes, stroke],
          };
        });

        return {
          layers: updatedLayers,

          // 그린 순서 기록
          undoStack: [...state.undoStack, stroke],

          // 새로운 Stroke가 생기면 Redo 초기화
          redoStack: [],
        };
      }),

    // Stroke의 points 업데이트
    updateStroke: (strokeId, points) =>
      set((state) => ({
        layers: state.layers.map((layer) => ({
          ...layer,

          strokes: layer.strokes.map((stroke) =>
            stroke.id === strokeId
              ? {
                  ...stroke,
                  points,
                }
              : stroke,
          ),
        })),
      })),

    // ===========================
    // History
    // ===========================

    undoStack: [],

    redoStack: [],

    // ===========================
    // Undo
    // ===========================

    undo: () =>
      set((state) => {
        if (state.undoStack.length === 0) {
          return state;
        }

        const lastStroke = state.undoStack[state.undoStack.length - 1];

        const updatedLayers = state.layers.map((layer) => ({
          ...layer,

          strokes: layer.strokes.filter(
            (stroke) => stroke.id !== lastStroke.id,
          ),
        }));

        return {
          layers: updatedLayers,

          undoStack: state.undoStack.slice(0, -1),

          redoStack: [...state.redoStack, lastStroke],
        };
      }),

    // ===========================
    // Redo
    // ===========================

    redo: () =>
      set((state) => {
        if (state.redoStack.length === 0) {
          return state;
        }

        const stroke = state.redoStack[state.redoStack.length - 1];

        // Stroke가 존재하는 Layer 찾기
        const targetLayer = state.layers.find((layer) =>
          layer.strokes.some((currentStroke) => currentStroke.id === stroke.id),
        );

        // 현재 구조에서는 삭제된 Layer에 대한
        // 복구까지는 아직 처리하지 않음
        if (!targetLayer) {
          return state;
        }

        const updatedLayers = state.layers.map((layer) => {
          if (layer.id !== targetLayer.id) {
            return layer;
          }

          return {
            ...layer,
            strokes: [...layer.strokes, stroke],
          };
        });

        return {
          layers: updatedLayers,

          undoStack: [...state.undoStack, stroke],

          redoStack: state.redoStack.slice(0, -1),
        };
      }),

    // ===========================
    // Recent Colors
    // ===========================

    recentColors: [],

    addRecentColor: (color) =>
      set((state) => {
        const colors = state.recentColors.filter(
          (currentColor) => currentColor !== color,
        );

        return {
          recentColors: [color, ...colors].slice(0, 16),
        };
      }),
  };
});
