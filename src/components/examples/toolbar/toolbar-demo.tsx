import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";
import Toolbar from "@/components/ui/toolbar";

const ToolbarDemo = () => {
  return (
    <div className="demo">
      <Toolbar>
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
    </div>
  );
};

export default ToolbarDemo;
