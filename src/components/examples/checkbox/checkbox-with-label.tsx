import Checkbox from "@/components/ui/checkbox";

const CheckboxWithLabel = () => {
  return (
    <div className="demo">
      <label>
        <Checkbox name="duration" value="daily" defaultChecked />
        Daily
      </label>
      <label>
        <Checkbox name="duration" value="weekly" />
        Weekly
      </label>
      <label>
        <Checkbox name="duration" value="monthly" />
        Monthly
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
