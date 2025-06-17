import Radio from "@/components/ui/radio";

const RadioWithLabel = () => {
  return (
    <div className="demo">
      <label>
        <Radio name="lang" value="en" defaultChecked />
        English
      </label>
      <label>
        <Radio name="lang" value="es" />
        Spanish
      </label>
      <label>
        <Radio name="lang" value="ar" />
        Arabic
      </label>
    </div>
  );
};

export default RadioWithLabel;
