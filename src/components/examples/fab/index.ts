import type { DemoDefinition } from "@/types/demo";
import FabDemo from "./fab-demo";
import FabSize from "./fab-size";
import FabVariant from "./fab-variant";
import FabWithIcon from "./fab-with-icon";
import FabIconOnly from "./fab-icon-only";
import FabDisabled from "./fab-disabled";

const FAB_DEMO: DemoDefinition = {
  id: "fab",
  label: "FAB",
  description:
    "Floating action buttons (FABs) help people take primary actions",
  content: [
    {
      id: "overview",
      preview: FabDemo,
      code: `
import Fab from "@/components/ui/fab";
 
export function FabDemo {
    return (
        <div className="demo">
            <Fab>Navigate</Fab>
        </div>
    );
};`,
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: `
import "./style.css";
import type { ComponentProps } from "react";
 
type FabProps = ComponentProps<"button"> & {
    variant?:
        | "primary"
        | "secondary"
        | "tertiary"
        | "soft-primary"
        | "soft-secondary"
        | "soft-tertiary";
    size?: "sm" | "md" | "lg";
};
 
const Fab = ({ variant = "soft-primary", size = "sm", ...props }: FabProps) => {
    return <button mui-fab={variant} data-size={size} {...props} />;
};
 
export default Fab;
`,
        css: `
[mui-fab] {
    cursor: pointer;
    width: max-content;
    position: relative;
    border: none;
    outline-offset: 1px;
    outline: 10px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--fab-bg);
    transition: var(--transition-standard-fast-effects);
    box-shadow: var(--shadow-2);
 
    &[mui-fab="primary"] {
        --fab-bg: var(--color-primary);
 
        color: var(--color-on-primary);
    }
 
    &[mui-fab="secondary"] {
        --fab-bg: var(--color-secondary);
 
        color: var(--color-on-secondary);
    }
 
    &[mui-fab="tertiary"] {
        --fab-bg: var(--color-tertiary);
 
        color: var(--color-on-tertiary);
    }
 
    &[mui-fab="soft-primary"] {
        --fab-bg: var(--color-primary-container);
 
        color: var(--color-on-primary-container);
    }
 
    &[mui-fab="soft-secondary"] {
        --fab-bg: var(--color-secondary-container);
 
        color: var(--color-on-secondary-container);
    }
 
    &[mui-fab="soft-tertiary"] {
        --fab-bg: var(--color-tertiary-container);
 
        color: var(--color-tertiary-on-container);
    }
 
    &[data-size="sm"] {
        height: 56px;
        gap: var(--spacing-8);
        padding-inline: var(--spacing-16);
        font: var(--font-label-lg);
        border-radius: var(--radius-lg);
 
        & > [data-icon] {
            font-size: 24px;
        }
    }
 
    &[data-size="md"] {
        height: 80px;
        gap: var(--spacing-12);
        padding-inline: calc(var(--spacing-24) + var(--spacing-2));
        font: var(--font-title-md);
        border-radius: var(--radius-lg-inc);
 
        & > [data-icon] {
            font-size: 28px;
        }
    }
 
    &[data-size="lg"] {
        height: 96px;
        padding-inline: var(--spacing-48);
        gap: var(--spacing-12);
        font: var(--font-headline-sm);
        border-radius: var(--radius-xl);
 
        & > [data-icon] {
            font-size: 36px;
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
 
    &:hover {
        box-shadow: var(--shadow-3);
        background-color: color-mix(in srgb, currentColor 8%, var(--fab-bg));
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
      preview: FabVariant,
      code: `
import Fab from "@/components/ui/fab";
 
export default FabVariant {
    return (
        <div className="demo">
            <Fab variant="primary">Primary</Fab>
            <Fab variant="secondary">Secondary</Fab>
            <Fab variant="tertiary">Tertiary</Fab>
            <Fab variant="soft-primary">Soft Primary</Fab>
            <Fab variant="soft-secondary">Soft Secondary</Fab>
            <Fab variant="soft-tertiary">Soft Tertiary</Fab>
        </div>
    );
};`,
    },
    {
      id: "size",
      label: "Size",
      preview: FabSize,
      code: `
import Fab from "@/components/ui/fab";
 
export function FabSize {
    return (
        <div className="demo">
            <Fab size="sm" variant="soft-secondary">
                Small
            </Fab>
            <Fab size="md" variant="soft-secondary">
                Medium
            </Fab>
            <Fab size="lg" variant="soft-secondary">
                Large
            </Fab>
        </div>
    );
};`,
    },
    {
      id: "disabled",
      label: "Disabled",
      preview: FabDisabled,
      code: `
import Fab from "@/components/ui/fab";
 
export default FabDisabled {
    return (
        <div className="demo">
            <Fab disabled>Disabled</Fab>
        </div>
    );
};`,
    },
    {
      id: "with-icon",
      label: "With Icon",
      preview: FabWithIcon,
      code: `
import Icon from "@/components/misc/icon";
import Fab from "@/components/ui/fab";
 
const FabWithIcon = () => {
    return (
        <div className="demo">
            <Fab variant="primary">
                <Icon name="add" /> New task
            </Fab>
        </div>
    );
};`,
    },
    {
      id: "icon-only",
      label: "Icon Only",
      preview: FabIconOnly,
      code: `
import Icon from "@/components/misc/icon";
import Fab from "@/components/ui/fab";
 
export default FabIconOnly {
    return (
        <div className="demo">
            <Fab variant="primary">
                <Icon name="edit" />
            </Fab>
        </div>
    );
};`,
    },
  ],
};

export default FAB_DEMO;
