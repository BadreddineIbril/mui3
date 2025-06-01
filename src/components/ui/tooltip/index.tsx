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
  return <div data-tooltip {...props} />;
};

const TooltipContent = ({ ...props }: TooltipContentProps) => {
  return <div data-tooltip-content {...props} role="tooltip" />;
};

const TooltipSubhead = ({ ...props }: TooltipSubheadProps) => (
  <p data-tooltip-subhead {...props} />
);

const TooltipSupporting = ({ ...props }: TooltipSupportingProps) => (
  <p data-tooltip-supporting {...props} />
);

const TooltipFooter = ({ ...props }: TooltipFooterProps) => (
  <div data-tooltip-footer {...props} />
);

const TooltipAction = ({ ...props }: TooltipActionProps) => (
  <Button {...props} variant="text" size="sm" />
);

export {
  Tooltip,
  TooltipContent,
  TooltipSubhead,
  TooltipSupporting,
  TooltipFooter,
  TooltipAction,
};
