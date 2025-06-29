import { List, ListItem } from "@/components/ui/list";

const ListOverline = () => {
  return (
    <div className="demo">
      <List>
        <ListItem label="Headline" overline="Overline" />
        <ListItem label="Headline" overline="Overline" />
        <ListItem label="Headline" overline="Overline" />
      </List>
    </div>
  );
};

export default ListOverline;
