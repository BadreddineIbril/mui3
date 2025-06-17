import type { DemoDefinition } from "@/types/demo";
import SwitchDemo from "./switch-demo";
import SwitchDisabled from "./switch-disabled";
import SwitchWithIcon from "./switch-with-icon";
import SwitchWithLabel from "./switch-with-label";

const SWITCH_DEMO: DemoDefinition = {
  id: "switch",
  label: "Switch",
  description: "Switches toggle the selection of an item on or off",
  content: [
    {
      id: "overview",
      preview: SwitchDemo,
      code: 'import Switch from "@/components/ui/switch";\n \nexport function SwitchDemo() {\n    return (\n        <div className="demo">\n            <Switch />\n        </div>\n    );\n};',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport type { ComponentProps } from "react";\n \ntype SwitchProps = Omit<ComponentProps<"input">, "type"> & {\n    icons?: boolean;\n    showOnlySelectedIcon?: boolean;\n};\n \nconst Switch = ({ icons, showOnlySelectedIcon, ...props }: SwitchProps) => {\n    return (\n        <input\n            mui-switch=""\n            data-icons={icons || undefined}\n            data-show-only-selected-icon={showOnlySelectedIcon || undefined}\n            {...props}\n            type="checkbox"\n        />\n    );\n};\n \nexport default Switch;',
        css: '[mui-switch] {\n    --switch-width: 52px;\n    --switch-height: 32px;\n    --switch-thumb-size: 16px;\n \n    cursor: pointer;\n    position: relative;\n    appearance: none;\n    -webkit-appearance: none;\n    outline-offset: 1px;\n    outline: 10px solid transparent;\n    width: var(--switch-width);\n    height: var(--switch-height);\n    border-radius: var(--radius-rounded);\n    border: 2px solid var(--color-outline);\n    background-color: var(--color-surface-container-highest);\n    display: flex;\n    align-items: center;\n \n    &::before {\n        content: "";\n        position: absolute;\n        clip-path: circle();\n        inset-inline-start: var(--spacing-8);\n        width: var(--switch-thumb-size);\n        height: var(--switch-thumb-size);\n        color: var(--color-on-primary);\n        background-color: var(--color-outline);\n        transition: var(--transition-standard-default-effects);\n    }\n \n    &[data-icons],\n    &[data-show-only-selected-icon] {\n        &::before {\n            content: "✕";\n            font-size: 12px;\n            font-family: system-ui;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            inset-inline-start: var(--spacing-4);\n        }\n \n        &:checked::before {\n            content: "✓";\n            font-size: 16px;\n        }\n \n        &[data-show-only-selected-icon]:not(:checked)::before {\n            content: "";\n            inset-inline-start: var(--spacing-8);\n        }\n    }\n \n    &:checked {\n        border-color: transparent;\n        background-color: var(--color-primary);\n \n        &::before {\n            color: var(--color-primary);\n            background-color: var(--color-on-primary);\n            inset-inline-start: calc(\n                100% - var(--switch-thumb-size) - var(--spacing-2)\n            );\n        }\n    }\n \n    &:where(:checked, [data-icons]) {\n        --switch-thumb-size: 24px;\n    }\n \n    &[data-show-only-selected-icon]:not(:checked) {\n        --switch-thumb-size: 16px;\n    }\n \n    &:active {\n        --switch-thumb-size: 28px !important;\n \n        &:where(:not(:checked))::before {\n            inset-inline-start: var(--spacing-0) !important;\n        }\n    }\n \n    &:hover {\n        &::before {\n            background-color: var(--color-on-surface-variant);\n        }\n \n        &:checked::before {\n            background-color: var(--color-primary-container);\n        }\n    }\n \n    &:disabled {\n        pointer-events: none;\n \n        &:not(:checked) {\n            border-color: color-mix(in srgb, var(--color-outline) 12%, transparent);\n            background-color: color-mix(\n                in srgb,\n                var(--color-surface-container-highest) 12%,\n                transparent\n            );\n \n            &::before {\n                color: var(--color-surface-container-highest);\n            }\n        }\n \n        &:checked {\n            background-color: color-mix(\n                in srgb,\n                var(--color-on-surface) 12%,\n                transparent\n            );\n \n            &::before {\n                background-color: var(--color-surface);\n                color: color-mix(in srgb, var(--color-on-surface) 38%, transparent);\n            }\n        }\n    }\n \n    &:focus-visible {\n        animation: focus var(--transition-standard-slow-spatial) forwards;\n    }\n}',
      },
    },
    {
      id: "with-icon",
      label: "With Icon",
      preview: SwitchWithIcon,
      code: 'import Switch from "@/components/ui/switch";\n \nexport function SwitchWithIcon() {\n    return (\n        <div className="demo">\n            <Switch icons />\n            <Switch showOnlySelectedIcon />\n        </div>\n    );\n};',
    },
    {
      id: "with-label",
      label: "With Label",
      preview: SwitchWithLabel,
      code: 'import Switch from "@/components/ui/switch";\n \nexport function SwitchWithLabel() {\n    return (\n        <div className="demo">\n            <label htmlFor="wifi">\n                <Switch id="wifi" defaultChecked />\n                Wi-fi\n            </label>\n            <label htmlFor="bluetooth">\n                <Switch id="bluetooth" />\n                Bluetooth\n            </label>\n        </div>\n    );\n};',
    },
    {
      id: "disabled",
      label: "Disabled",
      preview: SwitchDisabled,
      code: 'import Switch from "@/components/ui/switch";\n \nexport function SwitchDisabled() {\n    return (\n        <div className="demo">\n            <Switch disabled defaultChecked />\n            <Switch disabled />\n            <Switch icons disabled defaultChecked />\n            <Switch icons disabled />\n        </div>\n    );\n};',
    },
  ],
};

export default SWITCH_DEMO;
