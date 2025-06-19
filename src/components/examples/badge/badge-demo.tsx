import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";
import Badge from "@/components/ui/badge";

const BadgeDemo = () => {
  return (
    <div className="demo">
      <IconButton>
        <Badge>
          <Icon name="groups" />
        </Badge>
      </IconButton>
    </div>
  );
};

export default BadgeDemo;
