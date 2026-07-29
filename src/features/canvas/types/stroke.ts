import type { Tool } from "./tool";

export interface Stroke {
  id: string;
  tool: Tool;

  color: string;

  strokeWidth: number;

  opacity: number;

  points: number[];
}
