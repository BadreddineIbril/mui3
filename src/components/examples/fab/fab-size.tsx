import Fab from "@/components/ui/fab";

const FabSize = () => {
  return (
    <div className="demo column">
      <Fab size="sm" variant="soft-secondary">
        Small
      </Fab>
      <Fab size="md" variant="soft-secondary">
        Medium
      </Fab>
      <Fab size="lg" variant="soft-secondary">
        Large
      </Fab>
    </div>
  );
};

export default FabSize;
