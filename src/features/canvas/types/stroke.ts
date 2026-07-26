export interface Stroke {
  id: string;

  tool: "brush" | "eraser";

  color: string;

  strokeWidth: number;

  points: number[];
}
