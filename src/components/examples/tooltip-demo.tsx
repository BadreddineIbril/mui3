import {
  Tooltip,
  TooltipAction,
  TooltipContent,
  TooltipFooter,
  TooltipSubhead,
  TooltipSupporting,
} from "@/components/ui/tooltip";
import Button from "@/components/ui/button";

const TooltipDemo = () => {
  return (
    <div className="demo">
      <Tooltip>
        <Button>Hover on me</Button>
        <TooltipContent>Plain tooltip</TooltipContent>
      </Tooltip>
      <Tooltip>
        <Button variant="outlined">Hover on me</Button>
        <TooltipContent>
          <TooltipSubhead>Rich tooltip</TooltipSubhead>
          <TooltipSupporting>
            Rich tooltips bring attention to a particular element of feature
            that warrants the user's focus.
          </TooltipSupporting>
          <TooltipFooter>
            <TooltipAction>Action</TooltipAction>
          </TooltipFooter>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default TooltipDemo;
