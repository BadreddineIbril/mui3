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
      label: "Overview",
      preview: FabDemo,
      code: 'import Fab from "@/components/ui/fab";\n \nconst FabDemo = () => {\n    return (\n        <div className="demo">\n            <Fab>Navigate</Fab>\n        </div>\n    );\n};\n \nexport default FabDemo;',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport type { ComponentProps } from "react";\n \ntype FabProps = ComponentProps<"button"> & {\n    variant?:\n        | "primary"\n        | "secondary"\n        | "tertiary"\n        | "soft-primary"\n        | "soft-secondary"\n        | "soft-tertiary";\n    size?: "sm" | "md" | "lg";\n};\n \nconst Fab = ({ variant = "soft-primary", size = "sm", ...props }: FabProps) => {\n    return <button mui-fab={variant} data-size={size} {...props} />;\n};\n \nexport default Fab;',
        css: '[mui-fab] {\n    cursor: pointer;\n    width: max-content;\n    position: relative;\n    border: none;\n    outline-offset: 1px;\n    outline: 10px solid transparent;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--fab-color);\n    background-color: var(--fab-bg);\n    transition: var(--transition-standard-fast-effects);\n    box-shadow: var(--shadow-2);\n    background-repeat: no-repeat;\n    background-position: center;\n \n    &[mui-fab="primary"] {\n        --fab-bg: var(--color-primary);\n        --fab-color: var(--color-on-primary);\n    }\n \n    &[mui-fab="secondary"] {\n        --fab-bg: var(--color-secondary);\n        --fab-color: var(--color-on-secondary);\n    }\n \n    &[mui-fab="tertiary"] {\n        --fab-bg: var(--color-tertiary);\n        --fab-color: var(--color-on-tertiary);\n    }\n \n    &[mui-fab="soft-primary"] {\n        --fab-bg: var(--color-primary-container);\n        --fab-color: var(--color-on-primary-container);\n    }\n \n    &[mui-fab="soft-secondary"] {\n        --fab-bg: var(--color-secondary-container);\n        --fab-color: var(--color-on-secondary-container);\n    }\n \n    &[mui-fab="soft-tertiary"] {\n        --fab-bg: var(--color-tertiary-container);\n        --fab-color: var(--color-tertiary-on-container);\n    }\n \n    &[data-size="sm"] {\n        height: 56px;\n        gap: var(--spacing-8);\n        padding-inline: var(--spacing-16);\n        font: var(--font-label-lg);\n        border-radius: var(--radius-lg);\n \n        & > [mui-icon] {\n            font-size: 24px;\n        }\n    }\n \n    &[data-size="md"] {\n        height: 80px;\n        gap: var(--spacing-12);\n        padding-inline: calc(var(--spacing-24) + var(--spacing-2));\n        font: var(--font-title-md);\n        border-radius: var(--radius-lg-inc);\n \n        & > [mui-icon] {\n            font-size: 28px;\n        }\n    }\n \n    &[data-size="lg"] {\n        height: 96px;\n        padding-inline: var(--spacing-48);\n        gap: var(--spacing-12);\n        font: var(--font-headline-sm);\n        border-radius: var(--radius-xl);\n \n        & > [mui-icon] {\n            font-size: 36px;\n        }\n    }\n \n    &:hover {\n        box-shadow: var(--shadow-3);\n        background-color: color-mix(in srgb, currentColor 8%, var(--fab-bg));\n    }\n \n    &:active {\n        background-image: var(--ripple-circle);\n        animation: button-ripple var(--transition-expressive-default-spatial) forwards;\n    }\n \n    &:focus-visible {\n        animation: focus var(--transition-standard-slow-spatial) forwards;\n    }\n \n    &:disabled {\n        --fab-bg: color-mix(in srgb, var(--color-on-surface) 10%, transparent);\n        --fab-color: color-mix(in srgb, var(--color-on-surface) 38%, transparent);\n        box-shadow: none;\n        pointer-events: none;\n    }\n}',
      },
    },
    {
      id: "variant",
      label: "Variant",
      preview: FabVariant,
      code: 'import Fab from "@/components/ui/fab";\n \nconst FabVariant = () => {\n    return (\n        <div className="demo wrap">\n            <Fab variant="primary">Primary</Fab>\n            <Fab variant="secondary">Secondary</Fab>\n            <Fab variant="tertiary">Tertiary</Fab>\n            <Fab variant="soft-primary">Soft Primary</Fab>\n            <Fab variant="soft-secondary">Soft Secondary</Fab>\n            <Fab variant="soft-tertiary">Soft Tertiary</Fab>\n        </div>\n    );\n};\n \nexport default FabVariant;',
    },
    {
      id: "size",
      label: "Size",
      preview: FabSize,
      code: 'import Fab from "@/components/ui/fab";\n \nconst FabSize = () => {\n    return (\n        <div className="demo column">\n            <Fab size="sm" variant="soft-secondary">\n                Small\n            </Fab>\n            <Fab size="md" variant="soft-secondary">\n                Medium\n            </Fab>\n            <Fab size="lg" variant="soft-secondary">\n                Large\n            </Fab>\n        </div>\n    );\n};\n \nexport default FabSize;',
    },
    {
      id: "disabled",
      label: "Disabled",
      preview: FabDisabled,
      code: 'import Fab from "@/components/ui/fab";\n \nconst FabDisabled = () => {\n    return (\n        <div className="demo">\n            <Fab disabled>Disabled</Fab>\n        </div>\n    );\n};\n \nexport default FabDisabled;',
    },
    {
      id: "with-icon",
      label: "With Icon",
      preview: FabWithIcon,
      code: 'import Icon from "@/components/misc/icon";\nimport Fab from "@/components/ui/fab";\n \nconst FabWithIcon = () => {\n    return (\n        <div className="demo">\n            <Fab variant="primary">\n                <Icon name="add" /> New task\n            </Fab>\n        </div>\n    );\n};\n \nexport default FabWithIcon;',
    },
    {
      id: "icon-only",
      label: "Icon Only",
      preview: FabIconOnly,
      code: 'import Icon from "@/components/misc/icon";\nimport Fab from "@/components/ui/fab";\n \nconst FabIconOnly = () => {\n    return (\n        <div className="demo">\n            <Fab variant="primary">\n                <Icon name="edit" />\n            </Fab>\n        </div>\n    );\n};\n \nexport default FabIconOnly;',
    },
  ],
};

export default FAB_DEMO;
