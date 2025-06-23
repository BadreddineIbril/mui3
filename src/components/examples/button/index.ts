import type { DemoDefinition } from "@/types/demo";
import ButtonDemo from "./button-demo";
import ButtonDisabled from "./button-disabled";
import ButtonLink from "./button-link";
import ButtonRounded from "./button-rounded";
import ButtonVariant from "./button-variant";
import ButtonWithIcon from "./button-with-icon";
import ButtonSize from "./button-size";

const BUTTON_DEMO: DemoDefinition = {
  id: "button",
  label: "Button",
  description: "Buttons prompt most actions in a UI",
  content: [
    {
      id: "overview",
      label: "Overview",
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
        tsx: 'import "./style.css";\nimport { useNavigate } from "react-router-dom";\nimport type { ComponentProps, HTMLAttributeAnchorTarget } from "react";\n \ntype ButtonProps = ComponentProps<"button"> & {\n    variant?: "elevated" | "filled" | "tonal" | "outlined" | "text";\n    size?: "xs" | "sm" | "md" | "lg" | "xl";\n    rounded?: boolean;\n    href?: string;\n    target?: HTMLAttributeAnchorTarget;\n};\n \nconst Button = ({\n    variant = "filled",\n    target = "_self",\n    rounded = false,\n    size = "sm",\n    href,\n    ...props\n}: ButtonProps) => {\n    const navigate = useNavigate();\n \n    return (\n        <button\n            mui-button={variant}\n            data-rounded={rounded}\n            data-size={size}\n            {...props}\n            onClick={(e) => {\n                props.onClick?.(e);\n                if (!e.defaultPrevented && href) {\n                    if (target === "_blank") {\n                        open(href, target, "noopener,noreferrer");\n                    } else {\n                        navigate(href);\n                    }\n                }\n            }}\n        />\n    );\n};\n \nexport default Button;',
        css: '[mui-button] {\n    cursor: pointer;\n    width: max-content;\n    position: relative;\n    text-decoration: none;\n    border: 1px solid transparent;\n    outline-offset: 1px;\n    outline: 10px solid transparent;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: transparent;\n    transition: var(--transition-standard-fast-effects);\n \n    &[mui-button="elevated"] {\n        color: var(--color-primary);\n        background-color: var(--color-surface-container-low);\n        box-shadow: var(--shadow-2);\n \n        &:hover {\n            box-shadow: var(--shadow-3);\n        }\n    }\n \n    &[mui-button="filled"] {\n        color: var(--color-on-primary);\n        background-color: var(--color-primary);\n        box-shadow: var(--shadow-1);\n \n        &:hover {\n            background-color: color-mix(\n                in srgb,\n                var(--color-primary) 92%,\n                transparent\n            );\n            box-shadow: var(--shadow-2);\n        }\n    }\n \n    &[mui-button="tonal"] {\n        color: var(--color-on-secondary-container);\n        background-color: var(--color-secondary-container);\n \n        &:hover {\n            background-color: color-mix(\n                in srgb,\n                currentColor 8%,\n                var(--color-secondary-container)\n            );\n            box-shadow: var(--shadow-1);\n        }\n    }\n \n    &[mui-button="outlined"] {\n        color: var(--color-on-surface-variant);\n        border-color: var(--color-outline-variant);\n    }\n \n    &[mui-button="text"] {\n        color: var(--color-primary);\n    }\n \n    &[data-size="xs"] {\n        height: 32px;\n        padding-inline: var(--spacing-12);\n        gap: var(--spacing-4);\n    }\n \n    &[data-size="sm"] {\n        height: 40px;\n        padding-inline: var(--spacing-16);\n    }\n \n    &[data-size="md"] {\n        height: 56px;\n        padding-inline: var(--spacing-24);\n        font: var(--font-title-md);\n        border-radius: var(--radius-lg);\n \n        & > [mui-icon] {\n            font-size: 24px;\n        }\n    }\n \n    &[data-size="lg"] {\n        height: 96px;\n        padding-inline: var(--spacing-48);\n        gap: var(--spacing-12);\n        font: var(--font-headline-sm);\n \n        & > [mui-icon] {\n            font-size: 32px;\n        }\n    }\n \n    &[data-size="xl"] {\n        height: 136px;\n        padding-inline: var(--spacing-64);\n        gap: var(--spacing-16);\n        font: var(--font-headline-lg);\n \n        & > [mui-icon] {\n            font-size: 40px;\n        }\n    }\n \n    &::before {\n        inset: 0;\n        opacity: 0;\n        position: absolute;\n        border-radius: inherit;\n        outline: 1px solid color-mix(in srgb, currentColor 12%, transparent);\n        background-color: color-mix(in srgb, currentColor 12%, transparent);\n    }\n \n    &[data-size="xs"],\n    &[data-size="sm"] {\n        font: var(--font-label-lg);\n        border-radius: var(--radius-md);\n \n        & > [mui-icon] {\n            font-size: 20px;\n        }\n    }\n \n    &[data-size="sm"],\n    &[data-size="md"] {\n        gap: var(--spacing-8);\n    }\n \n    &[data-size="lg"],\n    &[data-size="xl"] {\n        border-radius: var(--radius-xl);\n    }\n \n    &[mui-button="text"],\n    &[mui-button="outlined"],\n    &[mui-button="elevated"] {\n        &:hover {\n            background-color: color-mix(in srgb, currentColor 8%, transparent);\n        }\n    }\n \n    &[data-rounded="true"] {\n        border-radius: var(--radius-rounded);\n    }\n \n    &:active::before {\n        content: "";\n        animation: ripple var(--transition-standard-default-effects) forwards;\n    }\n \n    &:focus-visible {\n        animation: focus var(--transition-standard-slow-spatial) forwards;\n    }\n \n    &:disabled {\n        box-shadow: none;\n        pointer-events: none;\n        color: color-mix(in srgb, var(--color-on-surface) 38%, transparent);\n        background-color: color-mix(\n            in srgb,\n            var(--color-on-surface) 10%,\n            transparent\n        );\n    }\n}',
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
