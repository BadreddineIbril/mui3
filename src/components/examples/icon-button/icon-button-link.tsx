import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";

const IconButtonLink = () => {
  return (
    <div className="demo">
      <IconButton href="#" target="_blank" variant="tonal">
        <Icon name="home" />
      </IconButton>
    </div>
  );
};

export default IconButtonLink;
