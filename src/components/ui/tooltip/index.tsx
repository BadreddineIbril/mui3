import "./style.css";
import type { ComponentProps } from "react";
import Button from "@/components/ui/button";

type TooltipProps = ComponentProps<"div">;
type TooltipContentProps = ComponentProps<"div">;
type TooltipSubheadProps = ComponentProps<"p">;
type TooltipSupportingProps = ComponentProps<"p">;
type TooltipFooterProps = ComponentProps<"div">;
type TooltipActionProps = ComponentProps<"button">;

const Tooltip = ({ ...props }: TooltipProps) => {
  return <div mui-tooltip="" {...props} />;
};

const TooltipContent = ({ ...props }: TooltipContentProps) => {
  return <div mui-tooltip-content="" {...props} role="tooltip" />;
};

const TooltipSubhead = ({ ...props }: TooltipSubheadProps) => (
  <p mui-tooltip-subhead="" {...props} />
);

const TooltipSupporting = ({ ...props }: TooltipSupportingProps) => (
  <p mui-tooltip-supporting="" {...props} />
);

const TooltipFooter = ({ ...props }: TooltipFooterProps) => (
  <div mui-tooltip-footer="" {...props} />
);

const TooltipAction = ({ ...props }: TooltipActionProps) => (
  <Button mui-tooltip-action="" {...props} variant="text" size="sm" />
);

export {
  Tooltip,
  TooltipContent,
  TooltipSubhead,
  TooltipSupporting,
  TooltipFooter,
  TooltipAction,
};
