import Slider from "@/components/ui/slider";

const SliderDemo = () => {
  return (
    <div className="demo">
      <Slider labeled LabelFormatter="%" style={{ width: "250px" }} />
      <Slider defaultValue={50} style={{ width: "250px" }} />
      <Slider defaultValue={50} disabled style={{ width: "250px" }} />
      <Slider orientation="vertical" defaultValue={50} size="xl" style={{ height: "250px" }} />
    </div>
  );
};

export default SliderDemo;
