import { create } from "zustand";

import type { Stroke } from "../types/stroke";
import type { Tool } from "../types/tool";

interface CanvasStore {
  tool: Tool;

  color: string;

  brushSize: number;

  opacity: number;

  strokes: Stroke[];

  setTool: (tool: Tool) => void;

  setColor: (color: string) => void;

  setBrushSize: (size: number) => void;

  setOpacity: (opacity: number) => void;

  addStroke: (stroke: Stroke) => void;

  setStrokes: (strokes: Stroke[]) => void;
}

export const useCanvasStore = create<CanvasStore>((set) => ({
  tool: "pen",

  color: "#000000",

  brushSize: 5,

  opacity: 100,

  strokes: [],

  setTool: (tool) =>
    set({
      tool,
    }),

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

  addStroke: (stroke) =>
    set((state) => ({
      strokes: [...state.strokes, stroke],
    })),

  setStrokes: (strokes) =>
    set({
      strokes,
    }),
}));
