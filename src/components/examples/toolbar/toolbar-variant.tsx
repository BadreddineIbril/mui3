import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";
import Toolbar from "@/components/ui/toolbar";

const ToolbarVariant = () => {
  const variants: Array<"docked" | "floating"> = ["docked", "floating"];

  return (
    <div className="demo">
      {variants.map((variant) => (
        <Toolbar key={variant} variant={variant}>
          <IconButton>
            <Icon name="arrow_back" />
          </IconButton>
          <IconButton>
            <Icon name="arrow_forward" />
          </IconButton>
          <IconButton variant="filled" width="wide">
            <Icon name="add" />
          </IconButton>
          <IconButton>
            <Icon name="settings" />
          </IconButton>
          <IconButton>
            <Icon name="more_vert" />
          </IconButton>
        </Toolbar>
      ))}
    </div>
  );
};

export default ToolbarVariant;
