import Slider from "@/components/ui/slider";

const SliderSize = () => {
  const sizes: Array<"xs" | "sm" | "md" | "lg" | "xl"> = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
  ];

  return (
    <div className="demo">
      {sizes.map((size) => (
        <Slider key={size} size={size} defaultValue={50} />
      ))}
    </div>
  );
};

export default SliderSize;
