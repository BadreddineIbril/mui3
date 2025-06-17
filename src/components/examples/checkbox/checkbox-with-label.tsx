import Checkbox from "@/components/ui/checkbox";

const CheckboxWithLabel = () => {
  return (
    <div className="demo">
      <label htmlFor="terms">
        <Checkbox id="terms" defaultChecked />
        Accept terms and conditions
      </label>
      <label htmlFor="notifications">
        <Checkbox id="notifications" />
        Enable notifications
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
