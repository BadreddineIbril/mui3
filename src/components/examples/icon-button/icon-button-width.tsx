import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";

const IconButtonWithIcon = () => {
  return (
    <div className="demo">
      <IconButton width="narrow" variant="outlined">
        <Icon name="more_vert" />
      </IconButton>
      <IconButton width="default" variant="outlined">
        <Icon name="more_vert" />
      </IconButton>
      <IconButton width="wide" variant="outlined">
        <Icon name="more_vert" />
      </IconButton>
    </div>
  );
};

export default IconButtonWithIcon;
