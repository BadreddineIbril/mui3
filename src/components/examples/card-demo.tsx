import { Card, CardActionArea } from "@/components/ui/card";

const CardDemo = () => {
  return (
    <div className="demo column">
      <div style={{ display: "flex", gap: "24px" }}>
        <Card style={{ padding: "5em" }}>Elevated</Card>
        <Card variant="filled" style={{ padding: "5em" }}>
          Filled
        </Card>
        <Card variant="outlined" style={{ padding: "5em" }}>
          Outlined
        </Card>
      </div>
      <div style={{ display: "flex", gap: "24px" }}>
        <Card>
          <CardActionArea style={{ padding: "5em" }}>
            Interactive
          </CardActionArea>
        </Card>
        <Card variant="filled">
          <CardActionArea style={{ padding: "5em" }}>
            Interactive
          </CardActionArea>
        </Card>
        <Card variant="outlined">
          <CardActionArea style={{ padding: "5em" }}>
            Interactive
          </CardActionArea>
        </Card>
      </div>
      <div style={{ display: "flex", gap: "24px" }}>
        <Card>
          <CardActionArea disabled style={{ padding: "5em" }}>
            Interactive
          </CardActionArea>
        </Card>
        <Card variant="filled">
          <CardActionArea disabled style={{ padding: "5em" }}>
            Interactive
          </CardActionArea>
        </Card>
        <Card variant="outlined">
          <CardActionArea disabled style={{ padding: "5em" }}>
            Interactive
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default CardDemo;
