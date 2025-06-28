import "./style.css";
import Icon from "@/components/misc/icon";
import {
  useRef,
  Children,
  useState,
  useEffect,
  useContext,
  createContext,
  isValidElement,
  type ReactElement,
  type KeyboardEvent,
  type ComponentProps,
} from "react";

type SelectProps = ComponentProps<"div"> & {
  variant?: "outlined" | "filled";
  disabled?: boolean;
  placeholder?: string;
};

type SelectOptionProps = Omit<ComponentProps<"button">, "value"> & {
  value: string;
  selected?: boolean;
};

const SelectContext = createContext<{
  isOpen: boolean;
  isClosed: boolean;
  selected: string;
  open: () => void;
  close: () => void;
  setSelected: (value: string) => void;
} | null>(null);

const useSelectContext = () => {
  const ctx = useContext(SelectContext);
  if (!ctx)
    throw new Error("SelectOption must be used within a Select component");

  return ctx;
};

const Select = ({
  variant = "outlined",
  disabled,
  placeholder,
  children,
  ...props
}: SelectProps) => {
  const CLOSE_DELAY = 350;
  const ESC_KEY = "Escape";
  const ARROW_UP = "ArrowUp";
  const ARROW_DOWN = "ArrowDown";

  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsClosed(true);
    setTimeout(() => (setIsOpen(false), setIsClosed(false)), CLOSE_DELAY);
  }

  function getValue() {
    return Children.toArray(children).find(
      (c): c is ReactElement<SelectOptionProps> =>
        isValidElement<SelectOptionProps>(c) && c.props.value === selected
    )?.props.children;
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const options = Array.from(
      e.currentTarget.querySelectorAll<HTMLButtonElement>("[mui-select-option]")
    );
    const index = options.findIndex((opt) => opt === document.activeElement);

    if ([ARROW_DOWN, ARROW_UP].includes(e.key)) {
      e.preventDefault();
      const next =
        e.key === ARROW_DOWN
          ? (index + 1) % options.length
          : (index - 1 + options.length) % options.length;
      options[next]?.focus();
    } else if (e.key === ESC_KEY) {
      close();
    }
  }

  useEffect(() => {
    if (!triggerRef.current) return;

    const onClickOutside = (e: MouseEvent) =>
      !e.composedPath().includes(triggerRef.current as EventTarget) && close();

    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && selected) return triggerRef.current?.focus();

    const options =
      contentRef.current?.querySelectorAll<HTMLButtonElement>(
        "[mui-select-option]"
      ) ?? [];
    const focusableOption =
      [...options].find((opt) => opt.value === selected) ?? options?.[0];

    focusableOption?.focus();
  }, [selected, isOpen]);

  useEffect(() => {
    const isDefault = Children.toArray(children).find(
      (c): c is ReactElement<SelectOptionProps> =>
        isValidElement<SelectOptionProps>(c) && Boolean(c.props.selected)
    );

    if (isDefault) setSelected(isDefault.props.value);
  }, [children]);

  return (
    <SelectContext
      value={{ isOpen, isClosed, open, close, selected, setSelected }}>
      <div mui-select={variant} {...props} aria-disabled={disabled}>
        <button
          ref={triggerRef}
          mui-select-trigger=""
          role="combobox"
          disabled={disabled}
          aria-expanded={isOpen}
          onClick={isOpen ? close : open}>
          <span mui-select-value="">
            {getValue() ?? placeholder ?? "Select"}
          </span>
          <Icon name="arrow_drop_down" />
        </button>
        {isOpen && (
          <div
            role="listbox"
            mui-select-portal=""
            data-closed={isClosed}
            onKeyDown={onKeyDown}>
            <div ref={contentRef} mui-select-content="">
              {children}
            </div>
          </div>
        )}
      </div>
    </SelectContext>
  );
};

const SelectOption = ({ value, ...props }: SelectOptionProps) => {
  const { selected, setSelected, close } = useSelectContext();

  function onSelect() {
    if (selected === value) return;

    setSelected(value);
    close();
  }

  return (
    <button
      mui-select-option=""
      {...props}
      role="option"
      onClick={onSelect}
      aria-selected={selected === value}
    />
  );
};

export { Select, SelectOption };
