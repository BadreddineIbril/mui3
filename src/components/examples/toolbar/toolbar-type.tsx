import Button from "@/components/ui/button";
import Toolbar from "@/components/ui/toolbar";

const ToolbarType = () => {
  const types: Array<"standard" | "vibrant"> = ["standard", "vibrant"];

  return (
    <div className="demo column">
      {types.map((type) => (
        <Toolbar key={type} type={type}>
          <Button variant="text" rounded>
            Back
          </Button>
          <Button rounded>Next</Button>
        </Toolbar>
      ))}
    </div>
  );
};

export default ToolbarType;
