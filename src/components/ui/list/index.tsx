import "./style.css";
import type { ComponentProps } from "react";
import Checkbox from "@/components/ui/checkbox";
import Radio from "@/components/ui/radio";
import Switch from "@/components/ui/switch";
import Icon from "@/components/misc/icon";
import Divider from "@/components/ui/divider";

type ListProps = ComponentProps<"div">;
type ListItemProps = ComponentProps<"button"> & {
  overline?: string;
  supportingText?: string;
  trailingSupportingText?: string;
};
type ListDivider = ComponentProps<"hr">;
type ListItemLeadingProps = ComponentProps<"div"> & {
  type: ListItemLeadingTypes;
  value: string;
};
type ListItemTrailingProps = ComponentProps<"div"> & {
  type: ListItemTrailingTypes;
  value: string;
};

type ListItemLeadingTypes =
  | "monogram"
  | "icon"
  | "image"
  | "video"
  | "checkbox"
  | "radio"
  | "switch";
type ListItemTrailingTypes = "icon" | "checkbox" | "radio" | "switch";

const renderVariant = (type: string, value: string) =>
  ({
    monogram: <span>{value}</span>,
    icon: <Icon name={value} />,
    image: <img src={value} alt={`${type}-${value}`} />,
    video: (
      <video controls>
        <source src={value} />
      </video>
    ),
    checkbox: <Checkbox value={value} />,
    radio: <Radio value={value} />,
    switch: <Switch value={value} />,
  }[type]);

const List = ({ ...props }: ListProps) => (
  <div data-list {...props} role="list" tabIndex={-1} />
);

const ListItem = ({
  children,
  overline,
  supportingText,
  trailingSupportingText,
  ...props
}: ListItemProps) => {
  return (
    <button
      data-list-item
      {...props}
      tabIndex={props.onClick ? 0 : -1}
      role={props.onClick ? "button" : "listitem"}>
      <div data-list-item-content>
        {overline && <span data-list-item-overline>{overline}</span>}
        <div data-list-item-label>
          {children}
          {supportingText && (
            <span data-list-item-supporting>{supportingText}</span>
          )}
        </div>
      </div>
      {trailingSupportingText && (
        <span data-list-item-trailing-supporting>{trailingSupportingText}</span>
      )}
    </button>
  );
};

const ListItemLeading = ({ type, value, ...props }: ListItemLeadingProps) => (
  <div data-list-item-leading={type} {...props}>
    {renderVariant(type, value)}
  </div>
);

const ListItemTrailing = ({ type, value, ...props }: ListItemTrailingProps) => (
  <div data-list-item-trailing={type} {...props}>
    {renderVariant(type, value)}
  </div>
);

const ListDivider = ({ ...props }: ListDivider) => <Divider {...props} />;

export { List, ListItem, ListItemLeading, ListItemTrailing, ListDivider };
