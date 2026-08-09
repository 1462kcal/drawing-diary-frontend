import type { Tool } from "./tool";

export interface Stroke {
  id: string;

  layerId: string;
  authorId: string; //협업용

  points: number[];

  color: string;
  strokeWidth: number;
  opacity: number;

  tool: Tool;
}
