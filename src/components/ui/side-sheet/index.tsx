import "./style.css";
import {
  useState,
  useEffect,
  useContext,
  cloneElement,
  createContext,
  type ComponentProps,
  type ReactElement,
  type MouseEventHandler,
} from "react";
import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";

type SideSheetProps = ComponentProps<"div"> & {
  variant?: "standard" | "modal";
  open?: boolean;
};
type SideSheetContentProps = ComponentProps<"div">;
type SideSheetHeaderProps = Omit<ComponentProps<"div">, "children"> & {
  headline: string;
  close?: boolean;
  back?: boolean;
};
type SideSheetBodyProps = ComponentProps<"div">;
type SideSheetFooterProps = ComponentProps<"div"> & { showDivider?: boolean };

const SideSheetContext = createContext<{
  isOpen: boolean;
  toggle: (state: boolean) => void;
  variant: "standard" | "modal";
} | null>(null);

const useSideSheetContext = () => {
  const ctx = useContext(SideSheetContext);
  if (!ctx)
    throw new Error("SideSheetItem must be used within a SideSheet component");

  return ctx;
};

const SideSheet = ({
  children,
  variant = "standard",
  ...props
}: SideSheetProps) => {
  const ESC_KEY = "Escape";
  const [isOpen, setIsOpen] = useState<boolean>(props.open ?? false);

  function toggle(state: boolean) {
    setIsOpen(state);
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => e.key === ESC_KEY && toggle(false);

    if (isOpen) window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <SideSheetContext value={{ isOpen, toggle, variant }}>
      {children}
      {isOpen && variant === "modal" && (
        <div mui-side-sheet-overlay="" onClick={() => toggle(false)} />
      )}
    </SideSheetContext>
  );
};

const SideSheetTrigger = ({
  children,
}: {
  children: ReactElement<{ onClick?: MouseEventHandler }>;
}) => {
  const { isOpen, toggle } = useSideSheetContext();

  return cloneElement(children, { onClick: () => toggle(!isOpen) });
};

const SideSheetContent = ({ ...props }: SideSheetContentProps) => {
  const { isOpen, variant } = useSideSheetContext();

  return (
    <div mui-side-sheet-content={variant} aria-hidden={!isOpen} {...props} />
  );
};

const SideSheetHeader = ({
  headline,
  close = false,
  back = false,
  ...props
}: SideSheetHeaderProps) => {
  const { toggle } = useSideSheetContext();

  return (
    <div mui-side-sheet-header="" {...props}>
      {back && (
        <IconButton flipIconInRtl onClick={() => toggle(false)}>
          <Icon name="arrow_back" />
        </IconButton>
      )}
      <h2>{headline}</h2>
      {close && (
        <IconButton onClick={() => toggle(false)}>
          <Icon name="close" />
        </IconButton>
      )}
    </div>
  );
};

const SideSheetBody = ({ ...props }: SideSheetBodyProps) => {
  return <div mui-side-sheet-body="" {...props} />;
};

const SideSheetFooter = ({
  showDivider = false,
  ...props
}: SideSheetFooterProps) => {
  return <div mui-side-sheet-footer="" data-divider={showDivider} {...props} />;
};

const SideSheetClose = ({
  children,
}: {
  children: ReactElement<{ onClick?: MouseEventHandler }>;
}) => {
  const { toggle } = useSideSheetContext();

  return cloneElement(children, { onClick: () => toggle(false) });
};

export {
  SideSheet,
  SideSheetTrigger,
  SideSheetContent,
  SideSheetHeader,
  SideSheetBody,
  SideSheetFooter,
  SideSheetClose,
};
