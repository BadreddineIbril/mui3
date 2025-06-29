import { List, ListItem } from "@/components/ui/list";

const ListTrailingSupporting = () => {
  return (
    <div className="demo">
      <List>
        <ListItem label="Headline" trailingSupportingText="+100" />
        <ListItem label="Headline" trailingSupportingText="+100" />
        <ListItem label="Headline" trailingSupportingText="+100" />
      </List>
    </div>
  );
};

export default ListTrailingSupporting;
