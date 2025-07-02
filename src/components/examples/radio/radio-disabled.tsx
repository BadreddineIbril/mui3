import Radio from "@/components/ui/radio";

const RadioDisabled = () => {
  return (
    <div className="demo">
      <Radio name="animal" defaultChecked disabled />
      <Radio name="animal" disabled />
    </div>
  );
};

export default RadioDisabled;
