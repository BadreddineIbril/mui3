import Icon from "@/components/misc/icon";
import Fab from "@/components/ui/fab";

const FabWithIcon = () => {
  return (
    <div className="demo">
      <Fab variant="primary">
        <Icon name="add" /> New task
      </Fab>
    </div>
  );
};

export default FabWithIcon;
