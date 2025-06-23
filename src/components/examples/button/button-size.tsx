import Button from "@/components/ui/button";

const ButtonSize = () => {
  return (
    <div className="demo column">
      <Button size="xs" variant="tonal">
        Extra small
      </Button>
      <Button size="sm" variant="tonal">
        Small
      </Button>
      <Button size="md" variant="tonal">
        Medium
      </Button>
      <Button size="lg" variant="tonal">
        Large
      </Button>
      <Button size="xl" variant="tonal">
        Extra large
      </Button>
    </div>
  );
};

export default ButtonSize;
