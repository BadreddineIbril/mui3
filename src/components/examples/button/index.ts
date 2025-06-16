import type { DemoDefinition } from "@/types/demo";
import ButtonDemo from "./button-demo";
import ButtonDisabled from "./button-disabled";
import ButtonLink from "./button-link";
import ButtonRounded from "./button-rounded";
import ButtonVariant from "./button-variant";
import ButtonWithIcon from "./button-with-icon";
import ButtonSize from "./button.size";

const BUTTON_DEMO: DemoDefinition = {
  id: "button",
  label: "Button",
  description: "Displays a button or a component that looks like a button.",
  content: [
    {
      id: "overview",
      preview: ButtonDemo,
      code: `
import Button from "@/components/ui/button";
 
export function ButtonDemo {
    return <Button>Button</Button>;
};`,
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: `
import "./style.css";
import type { ComponentProps, HTMLAttributeAnchorTarget } from "react";
      
type ButtonProps = ComponentProps<"button"> & {
    variant?: "elevated" | "filled" | "tonal" | "outlined" | "text";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    rounded?: boolean;
    href?: string;
    target?: HTMLAttributeAnchorTarget;
};
      
const Button = ({
    variant = "filled",
    target = "_self",
    rounded = false,
    size = "sm",
    href,
    ...props
}: ButtonProps) => {
    return (
        <button
            mui-button={variant}
            data-rounded={rounded}
            data-size={size}
            {...props}
            onClick={(e) => {
              props.onClick?.(e);
              if (!e.defaultPrevented && href) open(href, target);
            }}
          />
        );
    };
      
export default Button;`,
        css: `
[mui-button] {
    cursor: pointer;
    width: max-content;
    position: relative;
    border: 1px solid transparent;
    outline-offset: 1px;
    outline: 10px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    transition: var(--transition-standard-fast-effects);
 
    &[mui-button="elevated"] {
        color: var(--color-primary);
        background-color: var(--color-surface-container-low);
        box-shadow: var(--shadow-2);
 
        &:hover {
            box-shadow: var(--shadow-3);
        }
    }
 
    &[mui-button="filled"] {
        color: var(--color-on-primary);
        background-color: var(--color-primary);
        box-shadow: var(--shadow-1);
 
        &:hover {
            background-color: color-mix(
                in srgb,
                var(--color-primary) 92%,
                transparent
            );
            box-shadow: var(--shadow-2);
        }
    }
 
    &[mui-button="tonal"] {
        color: var(--color-on-secondary-container);
        background-color: var(--color-secondary-container);
 
        &:hover {
            background-color: color-mix(
                in srgb,
                currentColor 8%,
                var(--color-secondary-container)
            );
            box-shadow: var(--shadow-1);
        }
    }
 
    &[mui-button="outlined"] {
        color: var(--color-on-surface-variant);
        border-color: var(--color-outline-variant);
    }
 
    &[mui-button="text"] {
        color: var(--color-primary);
    }
 
    &[data-size="xs"] {
        height: 32px;
        padding-inline: var(--spacing-12);
        gap: var(--spacing-4);
    }
 
    &[data-size="sm"] {
        height: 40px;
        padding-inline: var(--spacing-16);
    }
 
    &[data-size="md"] {
        height: 56px;
        padding-inline: var(--spacing-24);
        font: var(--font-title-md);
        border-radius: var(--radius-lg);
 
        & > [data-icon] {
            font-size: 24px;
        }
    }
 
    &[data-size="lg"] {
        height: 96px;
        padding-inline: var(--spacing-48);
        gap: var(--spacing-12);
        font: var(--font-headline-sm);
 
        & > [data-icon] {
            font-size: 32px;
        }
    }
 
    &[data-size="xl"] {
        height: 136px;
        padding-inline: var(--spacing-64);
        gap: var(--spacing-16);
        font: var(--font-headline-lg);
 
        & > [data-icon] {
            font-size: 40px;
        }
    }
 
    &::before {
        inset: 0;
        opacity: 0;
        position: absolute;
        border-radius: inherit;
        outline: 1px solid color-mix(in srgb, currentColor 12%, transparent);
        background-color: color-mix(in srgb, currentColor 12%, transparent);
    }
 
    &[data-size="xs"],
    &[data-size="sm"] {
        font: var(--font-label-lg);
        border-radius: var(--radius-md);
 
        & > [data-icon] {
            font-size: 20px;
        }
    }
 
    &[data-size="sm"],
    &[data-size="md"] {
        gap: var(--spacing-8);
    }
 
    &[data-size="lg"],
    &[data-size="xl"] {
        border-radius: var(--radius-xl);
    }
 
    &[mui-button="text"],
    &[mui-button="outlined"],
    &[mui-button="elevated"] {
        &:hover {
            background-color: color-mix(in srgb, currentColor 8%, transparent);
        }
    }
 
    &[data-rounded="true"] {
        border-radius: var(--radius-rounded);
    }
 
    &:active::before {
        content: "";
        animation: ripple var(--transition-standard-default-effects) forwards;
    }
 
    &:focus-visible {
        animation: focus var(--transition-standard-slow-spatial) forwards;
    }
 
    &:disabled {
        box-shadow: none;
        pointer-events: none;
        color: color-mix(in srgb, var(--color-on-surface) 38%, transparent);
        background-color: color-mix(
        in srgb,
        var(--color-on-surface) 10%,
        transparent
        );
    }
}`,
      },
    },
    {
      id: "variant",
      label: "Variant",
      preview: ButtonVariant,
      code: `
import Button from "@/components/ui/button";
 
export function ButtonVariant {
    return (
        <div className="demo">
            <Button variant="elevated">Elevated</Button>
            <Button variant="filled">Filled</Button>
            <Button variant="tonal">Tonal</Button>
            <Button variant="text">Text</Button>
            <Button variant="outlined">Outlined</Button>
        </div>
    );
};`,
    },
    {
      id: "size",
      label: "Size",
      preview: ButtonSize,
      code: `
import Button from "@/components/ui/button";
 
export function ButtonSize {
    return (
        <div className="demo">
            <Button size="xs" variant="tonal">
                Extra small
            </Button>
            <Button size="sm" variant="tonal">
                Small
            </Button>
            <Button size="md" variant="tonal">
                Medium
            </Button>
            <Button size="lg" variant="tonal">
                Large
            </Button>
            <Button size="xl" variant="tonal">
                Extra large
            </Button>
        </div>
    );
};`,
    },
    {
      id: "rounded",
      label: "Rounded",
      preview: ButtonRounded,
      code: `
import Button from "@/components/ui/button";
 
export function ButtonRounded {
    return (
        <div className="demo">
            <Button variant="outlined" rounded>
                Round
            </Button>
            <Button variant="outlined">Square</Button>
        </div>
    );
};`,
    },
    {
      id: "disabled",
      label: "Disabled",
      preview: ButtonDisabled,
      code: `
import Button from "@/components/ui/button";
 
export ButtonDisabled {
    return (
        <div className="demo">
            <Button disabled>Button</Button>
        </div>
    );
};`,
    },
    {
      id: "with-icon",
      label: "With Icon",
      preview: ButtonWithIcon,
      code: `
import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";
 
export function ButtonWithIcon {
    return (
        <div className="demo">
            <Button>
                <Icon name="edit" /> Button
            </Button>
        </div>
    );
};`,
    },
    {
      id: "link",
      label: "Link",
      preview: ButtonLink,
      code: `
import Button from "@/components/ui/button";
 
export function ButtonLink {
    return (
        <div className="demo">
            <Button href="#" target="_blank" variant="outlined" rounded>
                View all
            </Button>
        </div>
    );
};`,
    },
  ],
};

export default BUTTON_DEMO;
