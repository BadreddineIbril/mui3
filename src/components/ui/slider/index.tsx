import "./style.css";
import { useState, type ComponentProps, type CSSProperties } from "react";

type SliderProps = Omit<ComponentProps<"input">, "type" | "size"> & {
  labeled?: boolean;
  LabelFormatter?: string;
  orientation?: "horizontal" | "vertical";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

const Slider = ({
  size = "xs",
  orientation = "horizontal",
  min = 0,
  max = 100,
  step = 1,
  labeled = false,
  LabelFormatter = "",
  defaultValue = min,
  ...props
}: SliderProps) => {
  const [value, setValue] = useState<number>(Number(defaultValue));

  function cssValue() {
    return Math.max(
      ((value - Number(min)) / (Number(max) - Number(min))) * 100,
      0
    );
  }

  return (
    <div
      mui-slider=""
      data-size={size}
      data-orientation={orientation}
      data-labeled={labeled && `${value}${LabelFormatter}`}
      style={{ "--value": cssValue() } as CSSProperties}>
      <input
        mui-slider-track=""
        {...props}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        type="range"
        onInput={(e) => setValue(Number(e.currentTarget.value))}
      />
    </div>
  );
};

export default Slider;
