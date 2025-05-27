import "./style.css";
import {
  useRef,
  useState,
  Children,
  useContext,
  createContext,
  type ComponentProps,
  type CSSProperties,
  useEffect,
} from "react";

type TabState = { index: number; value: string };
type TabsProps = ComponentProps<"div"> & {
  variant?: "primary" | "secondary";
  defaultTab?: string;
  inlineIcon?: boolean;
};
type TabsListProps = ComponentProps<"div">;
type TabsTriggerProps = ComponentProps<"button"> & { value: string };
type TabsContentProps = ComponentProps<"div"> & { value: string };

const TabsContext = createContext<{
  activeTab: TabState;
  setTab: (tab: TabState) => void;
} | null>(null);

const useTabsContext = () => {
  const ctx = useContext(TabsContext);
  if (!ctx)
    throw new Error("Tabs component must be used within a Tabs provider");

  return ctx;
};

const Tabs = ({
  variant = "primary",
  defaultTab = "",
  inlineIcon,
  ...props
}: TabsProps) => {
  const [activeTab, setTab] = useState<{ index: number; value: string }>({
    index: 0,
    value: defaultTab,
  });

  return (
    <TabsContext.Provider value={{ activeTab, setTab }}>
      <div data-tabs={variant} data-inline-icon={inlineIcon} {...props} />
    </TabsContext.Provider>
  );
};

const TabsList = ({ ...props }: TabsListProps) => {
  const { activeTab } = useTabsContext();

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const tabs = Array.from(
      e.currentTarget.querySelectorAll<HTMLButtonElement>("[data-tabs-trigger]")
    );
    const index = tabs.findIndex((tab) => tab === document.activeElement);

    if (e.key === "ArrowRight") tabs[(index + 1) % tabs.length]?.focus();
    if (e.key === "ArrowLeft")
      tabs[(index - 1 + tabs.length) % tabs.length]?.focus();
  };

  return (
    <div
      data-tabs-list
      {...props}
      role="tablist"
      style={
        {
          "--length": Children.count(props.children),
          "--active": activeTab.index,
        } as CSSProperties
      }
      onKeyDown={onKeyDown}
    />
  );
};

const TabsTrigger = ({ value, onClick, ...props }: TabsTriggerProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { activeTab, setTab } = useTabsContext();

  function getTabIndex(tab: HTMLButtonElement) {
    return Array.from(tab.parentNode?.children || []).indexOf(tab);
  }

  useEffect(() => {
    if (ref.current && activeTab.value === value) {
      setTab({ value, index: getTabIndex(ref.current) });
    }
  }, [activeTab.value]);

  return (
    <button
      data-tabs-trigger
      {...props}
      ref={ref}
      role="tab"
      aria-selected={activeTab.value === value}
      tabIndex={activeTab.value === value ? 0 : -1}
      onClick={(e) => {
        setTab({
          index: getTabIndex(e.currentTarget),
          value,
        });
        onClick?.(e);
      }}
    />
  );
};

const TabsContent = ({ value, ...props }: TabsContentProps) => {
  const { activeTab } = useTabsContext();

  return (
    <div
      data-tabs-content={value}
      {...props}
      role="tabpanel"
      aria-hidden={activeTab.value !== value}
    />
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
