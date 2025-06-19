import { Card } from "@/components/ui/card";

const CardVariant = () => {
  return (
    <div className="demo">
      <Card variant="elevated">Elevated</Card>
      <Card variant="filled">Filled</Card>
      <Card variant="outlined">Outline</Card>
    </div>
  );
};

export default CardVariant;
