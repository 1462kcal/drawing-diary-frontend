import type { Stroke } from "./stroke";

export interface CanvasLayer {
  id: string;

  name: string;

  visible: boolean;

  locked: boolean;

  strokes: Stroke[];
}
