import "./style.css";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
  type ComponentProps,
  type MouseEventHandler,
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
    throw new Error("DialogTrigger must be used within a Dialog component");

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
      {isOpen && <div mui-dialog-overlay="" onClick={close} />}
    </DialogContext.Provider>
  );
};

const DialogTrigger = ({
  children,
}: {
  children: ReactElement<{ onClick?: MouseEventHandler }>;
}) => {
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
    <div mui-dialog-header="" data-divider={showDivider} {...props}>
      {icon && <Icon name={icon} />}
      {children}
    </div>
  );
};

const DialogHeadline = ({ ...props }: DialogHeadlineProps) => {
  return <h2 mui-dialog-headline="" {...props} />;
};

const DialogSupporting = ({ ...props }: DialogSupportingProps) => {
  return <p mui-dialog-supporting="" {...props} />;
};

const DialogContent = ({ ...props }: DialogContentProps) => {
  const { isOpen, isClosed } = useDialogContext();

  return (
    isOpen && (
      <div mui-dialog-portal="" data-closed={isClosed}>
        <div mui-dialog-content="" {...props} />
      </div>
    )
  );
};

const DialogBody = ({ ...props }: DialogBodyProps) => {
  return <div mui-dialog-body="" {...props} />;
};

const DialogClose = ({
  children,
}: {
  children: ReactElement<{ onClick?: MouseEventHandler }>;
}) => {
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
