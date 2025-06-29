import "./style.css";
import type { ComponentProps } from "react";
import Checkbox from "@/components/ui/checkbox";
import Radio from "@/components/ui/radio";
import Switch from "@/components/ui/switch";
import Icon from "@/components/misc/icon";
import Divider from "@/components/ui/divider";

type ListProps = ComponentProps<"div">;
type ListItemProps = ComponentProps<"button"> & {
  label: string;
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
  <div mui-list="" {...props} role="list" tabIndex={-1} />
);

const ListItem = ({
  children,
  label,
  overline,
  supportingText,
  trailingSupportingText,
  ...props
}: ListItemProps) => {
  return (
    <button
      mui-list-item=""
      {...props}
      tabIndex={props.onClick ? 0 : -1}
      role={props.onClick ? "button" : "listitem"}>
      <div mui-list-item-content="">
        <div mui-list-item-label="">
          {overline && <span mui-list-item-overline="">{overline}</span>}
          {label}
          {supportingText && (
            <span mui-list-item-supporting="">{supportingText}</span>
          )}
        </div>
        {children}
      </div>
      {trailingSupportingText && (
        <span mui-list-item-trailing-supporting="">
          {trailingSupportingText}
        </span>
      )}
    </button>
  );
};

const ListItemLeading = ({ type, value, ...props }: ListItemLeadingProps) => (
  <div mui-list-item-leading={type} {...props}>
    {renderVariant(type, value)}
  </div>
);

const ListItemTrailing = ({ type, value, ...props }: ListItemTrailingProps) => (
  <div mui-list-item-trailing={type} {...props}>
    {renderVariant(type, value)}
  </div>
);

const ListDivider = ({ ...props }: ListDivider) => <Divider {...props} />;

export { List, ListItem, ListItemLeading, ListItemTrailing, ListDivider };
