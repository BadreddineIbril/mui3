import Slider from "@/components/ui/slider";

const SliderWithIndicator = () => {
  return (
    <div className="demo">
      <Slider labeled defaultValue={50} />
      <Slider
        labeled
        LabelFormatter="%"
        size="xl"
        defaultValue={50}
        orientation="vertical"
      />
    </div>
  );
};

export default SliderWithIndicator;
