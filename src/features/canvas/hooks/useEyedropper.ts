import Konva from "konva";

import { useCanvasStore } from "../store/canvasStore";
import { rgbToHex } from "../utils/color";

export default function useEyedropper() {
  const { setColor, setTool } = useCanvasStore();

  const pickColor = (stage: Konva.Stage) => {
    const pointer = stage.getPointerPosition();

    if (!pointer) return;

    // 현재 화면을 하나의 Canvas로 렌더링
    const canvas = stage.toCanvas();

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const { data } = ctx.getImageData(
      Math.floor(pointer.x),
      Math.floor(pointer.y),
      1,
      1,
    );

    const [r, g, b, a] = data;

    // 완전 투명한 곳이면 무시
    if (a === 0) return;

    const color = rgbToHex(r, g, b);

    setColor(color);

    // 다시 펜으로 변경
    setTool("pen");
  };

  return {
    pickColor,
  };
}
