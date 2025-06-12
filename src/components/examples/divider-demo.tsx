import Divider from "@/components/ui/divider";

const DividerDemo = () => {
  return (
    <div className="demo">
      <Divider style={{ width: "500px" }} />
      <Divider orientation="vertical" style={{ height: "500px" }} />
    </div>
  );
};

export default DividerDemo;
