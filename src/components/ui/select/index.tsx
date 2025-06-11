import "./style.css";
import Icon from "@/components/misc/icon";
import {
  useRef,
  Children,
  useState,
  useEffect,
  useContext,
  createContext,
  type KeyboardEvent,
  type ComponentProps,
} from "react";

type SelectProps = ComponentProps<"div"> & {
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

const Select = ({ disabled, placeholder, children, ...props }: SelectProps) => {
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
    return Children.toArray(children).find((c) => c.props.value === selected)
      ?.props.children;
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const options = Array.from(
      e.currentTarget.querySelectorAll<HTMLButtonElement>(
        "[data-select-option]"
      )
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
        "[data-select-option]"
      ) ?? [];
    const focusableOption =
      [...options].find((opt) => opt.value === selected) ?? options?.[0];

    focusableOption?.focus();
  }, [selected, isOpen]);

  useEffect(() => {
    const isDefault = Children.toArray(children).find((c) => c.props.selected);

    if (isDefault) setSelected(isDefault.props.value);
  }, [children]);

  return (
    <SelectContext.Provider
      value={{ isOpen, isClosed, open, close, selected, setSelected }}>
      <div data-select {...props} aria-disabled={disabled}>
        <button
          ref={triggerRef}
          data-select-trigger
          role="combobox"
          disabled={disabled}
          aria-expanded={isOpen}
          onClick={isOpen ? close : open}>
          <span data-select-value>{getValue() ?? placeholder ?? "Select"}</span>
          <Icon name="arrow_drop_down" />
        </button>
        {isOpen && (
          <div
            role="listbox"
            data-select-portal
            data-closed={isClosed}
            onKeyDown={onKeyDown}>
            <div ref={contentRef} data-select-content>
              {children}
            </div>
          </div>
        )}
      </div>
    </SelectContext.Provider>
  );
};

const SelectOption = ({ ...props }: SelectOptionProps) => {
  const { selected, setSelected, close } = useSelectContext();

  function onSelect() {
    if (selected === props.value) return;

    setSelected(props.value);
    close();
  }

  return (
    <button
      data-select-option
      {...props}
      role="option"
      onClick={onSelect}
      aria-selected={selected === props.value}
    />
  );
};

export { Select, SelectOption };
