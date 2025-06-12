import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";

const IconButtonDemo = () => {
  return (
    <div className="demo">
      <IconButton>
        <Icon name="more_vert" />
      </IconButton>
      <IconButton disabled>
        <Icon name="volume_off" />
      </IconButton>
      <IconButton variant="filled">
        <Icon name="settings" />
      </IconButton>
      <IconButton variant="tonal" width="wide">
        <Icon name="download" />
      </IconButton>
      <IconButton variant="outlined" width="narrow">
        <Icon name="delete" />
      </IconButton>
    </div>
  );
};

export default IconButtonDemo;
