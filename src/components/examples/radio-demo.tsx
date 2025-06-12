import Radio from "@/components/ui/radio";

const RadioDemo = () => {
  return (
    <div className="demo">
      <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Radio defaultChecked name="theme" />
        Light
      </label>
      <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Radio name="theme" />
        Dark
      </label>
      <Radio defaultChecked disabled />
      <Radio disabled />
    </div>
  );
};

export default RadioDemo;
