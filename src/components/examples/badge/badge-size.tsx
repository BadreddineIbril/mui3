import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";
import Badge from "@/components/ui/badge";

const BadgeSize = () => {
  return (
    <div className="demo">
      <IconButton width="wide">
        <Badge size="sm">
          <Icon name="groups" />
        </Badge>
      </IconButton>
      <IconButton width="wide">
        <Badge size="lg" label="999+">
          <Icon name="mail" />
        </Badge>
      </IconButton>
    </div>
  );
};

export default BadgeSize;
