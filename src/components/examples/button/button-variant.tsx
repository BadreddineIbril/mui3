import Button from "@/components/ui/button";

const ButtonVariant = () => {
  return (
    <div className="demo">
      <Button variant="elevated">Elevated</Button>
      <Button>Filled</Button>
      <Button variant="tonal">Tonal</Button>
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export default ButtonVariant;
