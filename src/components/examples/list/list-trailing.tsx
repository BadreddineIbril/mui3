import { List, ListItem, ListItemTrailing } from "@/components/ui/list";

const ListTrailing = () => {
  return (
    <div className="demo column">
      <List>
        <ListItem
          label="Nike"
          supportingText="We've got a birthday git for you.">
          <ListItemTrailing type="icon" value="person" />
        </ListItem>
        <ListItem
          label="YouTube"
          supportingText="Congratulations on reaching 1 million subscribers.">
          <ListItemTrailing type="icon" value="person" />
        </ListItem>
        <ListItem
          label="X (Twitter)"
          supportingText="Nex login to X from ChromeDesktop on Windows.">
          <ListItemTrailing type="icon" value="person" />
        </ListItem>
      </List>

      <List>
        <ListItem
          label="Nike"
          supportingText="We've got a birthday git for you.">
          <ListItemTrailing type="switch" value="nike-1" />
        </ListItem>
        <ListItem
          label="YouTube"
          supportingText="Congratulations on reaching 1 million subscribers.">
          <ListItemTrailing type="switch" value="youtube-1" />
        </ListItem>
        <ListItem
          label="X (Twitter)"
          supportingText="Nex login to X from ChromeDesktop on Windows.">
          <ListItemTrailing type="switch" value="x-1" />
        </ListItem>
      </List>

      <List>
        <ListItem
          label="Nike"
          supportingText="We've got a birthday git for you.">
          <ListItemTrailing type="checkbox" value="nike-2" />
        </ListItem>
        <ListItem
          label="YouTube"
          supportingText="Congratulations on reaching 1 million subscribers.">
          <ListItemTrailing type="checkbox" value="youtube-2" />
        </ListItem>
        <ListItem
          label="X (Twitter)"
          supportingText="Nex login to X from ChromeDesktop on Windows.">
          <ListItemTrailing type="checkbox" value="x-2" />
        </ListItem>
      </List>

      <List>
        <ListItem
          label="Nike"
          supportingText="We've got a birthday git for you.">
          <ListItemTrailing type="radio" value="brand" />
        </ListItem>
        <ListItem
          label="YouTube"
          supportingText="Congratulations on reaching 1 million subscribers.">
          <ListItemTrailing type="radio" value="brand" />
        </ListItem>
        <ListItem
          label="X (Twitter)"
          supportingText="Nex login to X from ChromeDesktop on Windows.">
          <ListItemTrailing type="radio" value="brand" />
        </ListItem>
      </List>
    </div>
  );
};

export default ListTrailing;
