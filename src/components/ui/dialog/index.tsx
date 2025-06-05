import "./style.css";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
  type ComponentProps,
  type ReactElement,
  type ReactNode,
} from "react";
import Icon from "@/components/misc/icon";

type DialogProps = { children: ReactNode; open?: boolean; quick?: boolean };
type DialogContentProps = ComponentProps<"div">;
type DialogBodyProps = ComponentProps<"div">;
type DialogHeaderProps = ComponentProps<"div"> & {
  icon?: string;
  showDivider?: boolean;
};
type DialogHeadlineProps = ComponentProps<"h2">;
type DialogSupportingProps = ComponentProps<"p">;

const DialogContext = createContext<{
  isOpen: boolean;
  isClosed: boolean;
  open: () => void;
  close: () => void;
} | null>(null);

const useDialogContext = () => {
  const ctx = useContext(DialogContext);
  if (!ctx)
    throw new Error("Dialog component must be used within a Dialog provider");

  return ctx;
};

const Dialog = ({ children, quick, ...props }: DialogProps) => {
  const ESC_KEY = "Escape";
  const CLOSE_DELAY = quick ? 0 : 350;

  const [isOpen, setIsOpen] = useState<boolean>(props.open ?? false);
  const [isClosed, setIsClosed] = useState<boolean>(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsClosed(true);

    setTimeout(() => (setIsOpen(false), setIsClosed(false)), CLOSE_DELAY);
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => e.key === ESC_KEY && close();

    if (isOpen) window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <DialogContext.Provider value={{ isOpen, isClosed, open, close }}>
      {children}
      {isOpen && <div data-dialog-overlay onClick={close} />}
    </DialogContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DialogTrigger = ({ children }: { children: ReactElement<any> }) => {
  const { open } = useDialogContext();

  return cloneElement(children, { onClick: open });
};

const DialogHeader = ({
  icon,
  showDivider,
  children,
  ...props
}: DialogHeaderProps) => {
  return (
    <div data-dialog-header data-show-divider={showDivider} {...props}>
      {icon && <Icon name={icon} />}
      {children}
    </div>
  );
};

const DialogHeadline = ({ ...props }: DialogHeadlineProps) => {
  return <h2 data-dialog-headline {...props} />;
};

const DialogSupporting = ({ ...props }: DialogSupportingProps) => {
  return <p data-dialog-supporting {...props} />;
};

const DialogContent = ({ ...props }: DialogContentProps) => {
  const { isOpen, isClosed } = useDialogContext();

  return (
    isOpen && <div data-dialog-content data-closed={isClosed} {...props} />
  );
};

const DialogBody = ({ ...props }: DialogBodyProps) => {
  return <div data-dialog-body {...props} />;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DialogClose = ({ children }: { children: ReactElement<any> }) => {
  const { close } = useDialogContext();

  return cloneElement(children, { onClick: close });
};

export {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogHeadline,
  DialogSupporting,
  DialogContent,
  DialogBody,
  DialogClose,
};
