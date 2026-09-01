interface BrushSliderProps {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

export default function BrushSlider({
  label,
  min,
  max,
  value,
  onChange,
}: BrushSliderProps) {
  return (
    <div className="brush-slider">
      <div className="brush-slider-header">
        <span>{label}</span>

        <span className="brush-slider-value">{value}</span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}
