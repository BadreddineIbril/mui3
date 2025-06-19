import Button from "@/components/ui/button";
import {
  Tooltip,
  TooltipAction,
  TooltipContent,
  TooltipFooter,
  TooltipSubhead,
  TooltipSupporting,
} from "@/components/ui/tooltip";

const TooltipRich = () => {
  return (
    <div className="demo">
      <Tooltip>
        <Button variant="outlined">Hover or focus</Button>
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

export default TooltipRich;
