import {
  List,
  ListItem,
  ListDivider,
  ListItemLeading,
} from "@/components/ui/list";

const ListWithDivider = () => {
  return (
    <div className="demo">
      <List>
        <ListItem label="Alejandro Ortega" supportingText="Online">
          <ListItemLeading type="monogram" value="A" />
        </ListItem>
        <ListDivider />
        <ListItem label="Sofia Sacchi" supportingText="Online">
          <ListItemLeading type="monogram" value="S" />
        </ListItem>
        <ListDivider />
        <ListItem label="Lana Russo" supportingText="Offline">
          <ListItemLeading type="monogram" value="L" />
        </ListItem>
      </List>
    </div>
  );
};

export default ListWithDivider;
