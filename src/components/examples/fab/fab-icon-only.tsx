import Icon from "@/components/misc/icon";
import Fab from "@/components/ui/fab";

const FabIconOnly = () => {
  return (
    <div className="demo">
      <Fab variant="primary">
        <Icon name="edit" />
      </Fab>
    </div>
  );
};

export default FabIconOnly;
