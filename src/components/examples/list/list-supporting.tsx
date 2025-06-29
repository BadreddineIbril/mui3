import { List, ListItem } from "@/components/ui/list";

const ListSupporting = () => {
  return (
    <div className="demo">
      <List>
        <ListItem label="Headline" supportingText="Supporting text" />
        <ListItem label="Headline" supportingText="Supporting text" />
        <ListItem label="Headline" supportingText="Supporting text" />
      </List>
    </div>
  );
};

export default ListSupporting;
