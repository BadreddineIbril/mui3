import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";
import Toolbar from "@/components/ui/toolbar";

const ToolbarOrientation = () => {
  const orientations: Array<"horizontal" | "vertical"> = [
    "horizontal",
    "vertical",
  ];

  return (
    <div className="demo">
      {orientations.map((orientation) => (
        <Toolbar key={orientation} orientation={orientation} variant="floating">
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
      ))}
    </div>
  );
};

export default ToolbarOrientation;
