interface BrushSliderProps {
  label: string;
  min: number;
  max: number;
}

export default function BrushSlider({ label, min, max }: BrushSliderProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <span
        style={{
          fontSize: 12,
        }}
      >
        {label}
      </span>

      <input type="range" min={min} max={max} defaultValue={5} />
    </div>
  );
}
