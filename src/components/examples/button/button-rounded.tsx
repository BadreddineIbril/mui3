import Button from "@/components/ui/button";

const ButtonRounded = () => {
  return (
    <div className="demo">
      <Button variant="outlined" rounded>
        Round
      </Button>
      <Button variant="outlined">Square</Button>
    </div>
  );
};

export default ButtonRounded;
