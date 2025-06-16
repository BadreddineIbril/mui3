import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";

const ButtonWithIcon = () => {
  return (
    <div className="demo">
      <Button>
        <Icon name="edit" /> Button
      </Button>
    </div>
  );
};

export default ButtonWithIcon;
