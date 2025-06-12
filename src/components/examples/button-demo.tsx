import Button from "@/components/ui/button";

const ButtonDemo = () => {
  return (
    <div className="demo">
      <Button variant="elevated">Elevated</Button>
      <Button>Filled</Button>
      <Button variant="tonal">Tonal</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
};

export default ButtonDemo;
