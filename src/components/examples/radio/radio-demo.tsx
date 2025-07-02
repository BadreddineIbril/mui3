import Radio from "@/components/ui/radio";

const RadioDemo = () => {
  return (
    <div className="demo">
      <Radio name="club" value="fcb" defaultChecked />
      <Radio name="club" value="wac" />
    </div>
  );
};

export default RadioDemo;
