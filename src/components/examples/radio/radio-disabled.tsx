import Radio from "@/components/ui/radio";

const RadioDisabled = () => {
  return (
    <div className="demo">
      <Radio defaultChecked disabled />
      <Radio disabled />
    </div>
  );
};

export default RadioDisabled;
