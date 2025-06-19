import Button from "@/components/ui/button";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";

const TooltipDemo = () => {
  return (
    <div className="demo">
      <Tooltip>
        <Button variant="outlined">Hover or focus</Button>
        <TooltipContent>Plain tooltip</TooltipContent>
      </Tooltip>
    </div>
  );
};

export default TooltipDemo;
