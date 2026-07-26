export interface Stroke {
  id: string;
  tool: "brush";
  color: string;
  strokeWidth: number;
  points: number[];
}
