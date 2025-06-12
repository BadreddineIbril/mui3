import Icon from "@/components/misc/icon";
import Fab from "@/components/ui/fab";

const FabDemo = () => {
  return (
    <div className="demo">
      <Fab>
        <Icon name="mail" />
        Document
      </Fab>
      <Fab variant="soft-secondary">
        <Icon name="mail" />
        Document
      </Fab>
      <Fab variant="soft-tertiary">
        <Icon name="mail" />
        Document
      </Fab>
      <Fab variant="primary">
        <Icon name="edit" />
      </Fab>
      <Fab variant="secondary">
        <Icon name="favorite" />
      </Fab>
      <Fab variant="tertiary">
        <Icon name="add" />
      </Fab>
    </div>
  );
};

export default FabDemo;
