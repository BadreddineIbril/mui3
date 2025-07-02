import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";

const IconButtonSize = () => {
  return (
    <div className="demo wrap">
      <IconButton size="xs" variant="tonal">
        <Icon name="play_arrow" />
      </IconButton>
      <IconButton size="sm" variant="tonal">
        <Icon name="play_arrow" />
      </IconButton>
      <IconButton size="md" variant="tonal">
        <Icon name="play_arrow" />
      </IconButton>
      <IconButton size="lg" variant="tonal">
        <Icon name="play_arrow" />
      </IconButton>
      <IconButton size="xl" variant="tonal">
        <Icon name="play_arrow" />
      </IconButton>
    </div>
  );
};

export default IconButtonSize;
