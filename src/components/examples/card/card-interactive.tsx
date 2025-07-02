import { Card, CardActionArea } from "@/components/ui/card";

const CardInteractive = () => {
  return (
    <div className="demo wrap">
      <Card variant="elevated">
        <CardActionArea>Elevated</CardActionArea>
      </Card>
      <Card variant="filled">
        <CardActionArea>Filled</CardActionArea>
      </Card>
      <Card variant="outlined">
        <CardActionArea>Outline</CardActionArea>
      </Card>
    </div>
  );
};

export default CardInteractive;
