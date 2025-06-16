import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";

const IconButtonDisabled = () => {
  return (
    <div className="demo">
      <IconButton disabled>
        <Icon name="volume_off" />
      </IconButton>
    </div>
  );
};

export default IconButtonDisabled;
