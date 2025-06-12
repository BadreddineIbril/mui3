import Icon from "@/components/misc/icon";
import Badge from "@/components/ui/badge";
import IconButton from "@/components/ui/icon-button";

const BadgeDemo = () => {
  return (
    <div className="demo">
      <IconButton width="wide">
        <Badge size="lg" label="999+">
          <Icon name="mail" />
        </Badge>
      </IconButton>
      <IconButton width="wide">
        <Badge size="lg" label="10">
          <Icon name="chat_bubble" />
        </Badge>
      </IconButton>
      <IconButton width="wide">
        <Badge>
          <Icon name="groups" />
        </Badge>
      </IconButton>
      <IconButton width="wide">
        <Badge size="lg" label="3">
          <Icon name="videocam" />
        </Badge>
      </IconButton>
    </div>
  );
};

export default BadgeDemo;
