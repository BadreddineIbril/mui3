import Button from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CardDemo = () => {
  return (
    <div className="demo">
      <Card>
        <h2 className="title">Play relaxing songs</h2>
        <p className="description">From your recent favorites</p>
        <div className="actions">
          <Button rounded>Get started</Button>
        </div>
      </Card>
    </div>
  );
};

export default CardDemo;
