import { create } from "zustand";

import type { Stroke } from "../types/stroke";
import type { Tool } from "../types/tool";

interface CanvasStore {
  // Tool
  tool: Tool;
  setTool: (tool: Tool) => void;

  // Brush
  color: string;
  brushSize: number;
  opacity: number;

  setColor: (color: string) => void;
  setBrushSize: (size: number) => void;
  setOpacity: (opacity: number) => void;

  // Canvas
  strokes: Stroke[];
  redoStack: Stroke[];

  addStroke: (stroke: Stroke) => void;
  setStrokes: (strokes: Stroke[]) => void;

  undo: () => void;
  redo: () => void;
}

export const useCanvasStore = create<CanvasStore>((set) => ({
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
  // Canvas
  // ===========================

  strokes: [],

  redoStack: [],

  addStroke: (stroke) =>
    set((state) => ({
      strokes: [...state.strokes, stroke],
      redoStack: [], // 새 그림을 그리면 Redo 초기화
    })),

  setStrokes: (strokes) =>
    set({
      strokes,
    }),

  // ===========================
  // Undo
  // ===========================

  undo: () =>
    set((state) => {
      if (state.strokes.length === 0) return state;

      const lastStroke = state.strokes[state.strokes.length - 1];

      return {
        strokes: state.strokes.slice(0, -1),
        redoStack: [...state.redoStack, lastStroke],
      };
    }),

  // ===========================
  // Redo
  // ===========================

  redo: () =>
    set((state) => {
      if (state.redoStack.length === 0) return state;

      const lastStroke = state.redoStack[state.redoStack.length - 1];

      return {
        strokes: [...state.strokes, lastStroke],
        redoStack: state.redoStack.slice(0, -1),
      };
    }),
}));
