import Switch from "@/components/ui/switch";

const SwitchWithLabel = () => {
  return (
    <div className="demo">
      <label htmlFor="wifi">
        <Switch id="wifi" defaultChecked />
        Wi-fi
      </label>
      <label htmlFor="bluetooth">
        <Switch id="bluetooth" />
        Bluetooth
      </label>
    </div>
  );
};

export default SwitchWithLabel;
