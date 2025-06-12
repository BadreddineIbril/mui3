import Icon from "@/components/misc/icon";
import Toolbar from "@/components/ui/toolbar";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";

const ToolbarDemo = () => {
  return (
    <div className="demo column">
      <Toolbar style={{ width: "400px" }}>
        <Button variant="text" rounded>
          Back
        </Button>
        <Button rounded>Next</Button>
      </Toolbar>
      <Toolbar type="vibrant" style={{ width: "400px" }}>
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
      {["standard", "vibrant"].map((type, i) => (
        <Toolbar key={i} variant="floating" type={type}>
          <IconButton>
            <Icon name="videocam_off" />
          </IconButton>
          <IconButton>
            <Icon name="mic" />
          </IconButton>
          <IconButton>
            <Icon name="front_hand" />
          </IconButton>
          <IconButton>
            <Icon name="more_vert" />
          </IconButton>
        </Toolbar>
      ))}
      <Toolbar orientation="vertical" variant="floating">
        <IconButton>
          <Icon name="undo" />
        </IconButton>
        <IconButton>
          <Icon name="redo" />
        </IconButton>
        <IconButton>
          <Icon name="add" />
        </IconButton>
        <IconButton>
          <Icon name="text_format" />
        </IconButton>
        <IconButton>
          <Icon name="more_vert" />
        </IconButton>
      </Toolbar>
    </div>
  );
};

export default ToolbarDemo;
