import Switch from "@/components/ui/switch";

const SwitchDisabled = () => {
  return (
    <div className="demo">
      <Switch disabled defaultChecked />
      <Switch disabled />
      <Switch icons disabled defaultChecked />
      <Switch icons disabled />
    </div>
  );
};

export default SwitchDisabled;
