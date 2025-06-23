import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { SplitButton, SplitButtonItem } from "@/components/ui/split-button";
import Toolbar from "@/components/ui/toolbar";

const ToolbarAlignment = () => {
  return (
    <div className="demo column">
      <Toolbar alignment="spread">
        <Button variant="text" rounded>
          Back
        </Button>
        <Button rounded>Next</Button>
      </Toolbar>
      <Toolbar alignment="center">
        <SplitButton>
          <SplitButtonItem>
            <Icon name="videocam" />
            Yes
          </SplitButtonItem>
          <SplitButtonItem>
            <Icon name="keyboard_arrow_down" />
          </SplitButtonItem>
        </SplitButton>
        <Button variant="outlined">Next</Button>
        <Button variant="outlined">Maybe</Button>
        <IconButton variant="outlined">
          <Icon name="keyboard_arrow_down" />
        </IconButton>
      </Toolbar>
    </div>
  );
};

export default ToolbarAlignment;
