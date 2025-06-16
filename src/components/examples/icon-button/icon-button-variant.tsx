import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";

const IconButtonVariant = () => {
  return (
    <div className="demo">
      <IconButton variant="filled">
        <Icon name="volume_up" />
      </IconButton>
      <IconButton variant="tonal">
        <Icon name="volume_up" />
      </IconButton>
      <IconButton variant="outlined">
        <Icon name="volume_up" />
      </IconButton>
      <IconButton variant="standard">
        <Icon name="volume_up" />
      </IconButton>
    </div>
  );
};

export default IconButtonVariant;
