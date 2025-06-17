import Slider from "@/components/ui/slider";

const SliderOrientation = () => {
  return (
    <div className="demo">
      <Slider orientation="horizontal" defaultValue={50} />
      <Slider orientation="vertical" size="xl" defaultValue={50} />
    </div>
  );
};

export default SliderOrientation;
