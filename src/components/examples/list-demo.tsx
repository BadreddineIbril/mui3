import {
  List,
  ListItem,
  ListItemLeading,
  ListItemTrailing,
  ListDivider,
} from "@/components/ui/list";

const ListDemo = () => {
  return (
    <div className="demo column">
      <List style={{ width: "300px" }}>
        {[...Array(3)].map((_, i) => (
          <ListItem
            key={i}
            supportingText="Supporting text"
            trailingSupportingText="+100">
            Headline
          </ListItem>
        ))}
      </List>
      <List style={{ width: "300px" }}>
        {[...Array(3)].map((_, i) => (
          <ListItem key={i} trailingSupportingText="100+">
            <ListItemLeading type="monogram" value="A" />
            Headline
          </ListItem>
        ))}
      </List>
      <List style={{ width: "300px" }}>
        {[...Array(3)].map((_, i) => (
          <ListItem key={i}>
            <ListItemLeading
              style={{ clipPath: "circle()" }}
              type="image"
              value="https://images.pexels.com/photos/3945675/pexels-photo-3945675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            Headline
          </ListItem>
        ))}
      </List>
      <List style={{ width: "300px" }}>
        {[...Array(3)].map((_, i) => (
          <>
            {i === 2 && <ListDivider />}
            <ListItem
              key={i}
              overline="Overline"
              supportingText="Supporting text">
              Headline
              <ListItemTrailing type="icon" value="open_in_new" />
            </ListItem>
          </>
        ))}
      </List>
    </div>
  );
};

export default ListDemo;
