import { List, ListItem, ListItemLeading } from "@/components/ui/list";

const ListLeading = () => {
  return (
    <div className="demo column">
      <List>
        <ListItem
          label="Nike"
          supportingText="We've got a birthday git for you.">
          <ListItemLeading type="monogram" value="N" />
        </ListItem>
        <ListItem
          label="YouTube"
          supportingText="Congratulations on reaching 1 million subscribers.">
          <ListItemLeading type="monogram" value="Y" />
        </ListItem>
        <ListItem
          label="X (Twitter)"
          supportingText="Nex login to X from ChromeDesktop on Windows.">
          <ListItemLeading type="monogram" value="X" />
        </ListItem>
      </List>
      <List>
        <ListItem
          label="Nike"
          supportingText="We've got a birthday git for you.">
          <ListItemLeading type="icon" value="person" />
        </ListItem>
        <ListItem
          label="YouTube"
          supportingText="Congratulations on reaching 1 million subscribers.">
          <ListItemLeading type="icon" value="person" />
        </ListItem>
        <ListItem
          label="X (Twitter)"
          supportingText="Nex login to X from ChromeDesktop on Windows.">
          <ListItemLeading type="icon" value="person" />
        </ListItem>
      </List>
      <List>
        <ListItem
          label="Nike"
          supportingText="We've got a birthday git for you.">
          <ListItemLeading type="image" value="https://shorturl.at/AHFDJ" />
        </ListItem>
        <ListItem
          label="YouTube"
          supportingText="Congratulations on reaching 1 million subscribers.">
          <ListItemLeading type="image" value="https://shorturl.at/HqygK" />
        </ListItem>
        <ListItem
          label="X (Twitter)"
          supportingText="Nex login to X from ChromeDesktop on Windows.">
          <ListItemLeading type="image" value="https://shorturl.at/RZN7E" />
        </ListItem>
      </List>
      <List>
        <ListItem
          label="Nike"
          supportingText="We've got a birthday git for you.">
          <ListItemLeading type="switch" value="nike-1" />
        </ListItem>
        <ListItem
          label="YouTube"
          supportingText="Congratulations on reaching 1 million subscribers.">
          <ListItemLeading type="switch" value="youtube-1" />
        </ListItem>
        <ListItem
          label="X (Twitter)"
          supportingText="Nex login to X from ChromeDesktop on Windows.">
          <ListItemLeading type="switch" value="x-1" />
        </ListItem>
      </List>
      <List>
        <ListItem
          label="Nike"
          supportingText="We've got a birthday git for you.">
          <ListItemLeading type="checkbox" value="nike-2" />
        </ListItem>
        <ListItem
          label="YouTube"
          supportingText="Congratulations on reaching 1 million subscribers.">
          <ListItemLeading type="checkbox" value="youtube-2" />
        </ListItem>
        <ListItem
          label="X (Twitter)"
          supportingText="Nex login to X from ChromeDesktop on Windows.">
          <ListItemLeading type="checkbox" value="x-2" />
        </ListItem>
      </List>
      <List>
        <ListItem
          label="Nike"
          supportingText="We've got a birthday git for you.">
          <ListItemLeading type="radio" value="brand" />
        </ListItem>
        <ListItem
          label="YouTube"
          supportingText="Congratulations on reaching 1 million subscribers.">
          <ListItemLeading type="radio" value="brand" />
        </ListItem>
        <ListItem
          label="X (Twitter)"
          supportingText="Nex login to X from ChromeDesktop on Windows.">
          <ListItemLeading type="radio" value="brand" />
        </ListItem>
      </List>
    </div>
  );
};

export default ListLeading;
