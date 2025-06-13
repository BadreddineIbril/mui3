import "./style.css";
import {
  useEffect,
  type ButtonHTMLAttributes,
  type ComponentProps,
} from "react";
import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";

type SnackbarProps = Omit<ComponentProps<"div">, "children"> & {
  open: boolean;
  message: string;
  action?: {
    label: string;
  } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;
  close?: boolean;
  onClose?: () => void;
  duration?: number;
  position?:
    | "top-start"
    | "top-center"
    | "top-end"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end";

  line?: "single" | "multiple";
};

const Snackbar = ({
  open,
  message,
  action,
  close = false,
  duration = 5000,
  onClose,
  position = "bottom-start",
  line = "single",
  ...props
}: SnackbarProps) => {
  useEffect(() => {
    if (!open || !onClose) return;

    const timer = setTimeout(onClose, duration);

    return () => clearTimeout(timer);
  }, [open, onClose, duration]);

  return (
    <div
      mui-snackbar={position}
      data-line={line}
      aria-live="polite"
      inert={!open || undefined}
      role={open ? "status" : undefined}
      {...props}>
      <p mui-snackbar-message="">{message}</p>
      {(close || action) && (
        <div mui-snackbar-events="">
          {action && (
            <Button mui-snackbar-action="" variant="text" {...action}>
              {action.label}
            </Button>
          )}
          {close && (
            <IconButton
              mui-snackbar-close=""
              aria-label="close"
              onClick={onClose}>
              <Icon name="close" />
            </IconButton>
          )}
        </div>
      )}
    </div>
  );
};

export default Snackbar;
