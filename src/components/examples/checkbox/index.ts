import type { DemoDefinition } from "@/types/demo";
import CheckboxDemo from "./checkbox-demo";
import CheckboxDisabled from "./checkbox-disabled";
import CheckboxWithLabel from "./checkbox-with-label";
import CheckboxIndeterminate from "./checkbox-indeterminate";

const CHECKBOX_DEMO: DemoDefinition = {
  id: "checkbox",
  label: "Checkbox",
  description:
    "Checkboxes let users select one or more items from a list, or turn an item on or off",
  content: [
    {
      id: "overview",
      label: "Overview",
      preview: CheckboxDemo,
      code: 'import Checkbox from "@/components/ui/checkbox";\n \nexport function CheckboxDemo() {\n    return (\n        <div className="demo">\n            <Checkbox />\n        </div>\n    );\n};',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport type { ComponentProps } from "react";\n \ntype CheckboxProps = Omit<ComponentProps<"input">, "type">;\n \nconst Checkbox = ({ ...props }: CheckboxProps) => {\n    return <input mui-checkbox="" {...props} type="checkbox" />;\n};\n \nexport default Checkbox;',
        css: '[mui-checkbox] {\n    --checkbox-size: 18px;\n    --checkbox-offset: calc(var(--checkbox-size) / 3);\n \n    cursor: pointer;\n    position: relative;\n    appearance: none;\n    -webkit-appearance: none;\n    width: var(--checkbox-size);\n    height: var(--checkbox-size);\n    margin: var(--checkbox-offset);\n    outline-offset: 10px;\n    outline: 10px solid transparent;\n    background-color: transparent;\n    border-radius: var(--radius-xs);\n    border: 2px solid var(--color-on-surface-variant);\n    transition: var(--transition-standard-fast-effects);\n \n    &::before {\n        content: "";\n        position: absolute;\n        inset-block-start: 50%;\n        left: 50%;\n        width: calc(var(--checkbox-size) / 5);\n        height: calc(var(--checkbox-size) / 4);\n        border-right: 2px solid transparent;\n        border-block-end: 2px solid transparent;\n        transform: translate(-50%, -60%) rotate(45deg);\n        transition: var(--transition-standard-slow-effects);\n    }\n \n    &::after {\n        inset: 0;\n        scale: 3;\n        opacity: 0;\n        position: absolute;\n        border-radius: var(--radius-circled);\n        background-color: color-mix(\n            in srgb,\n            var(--color-on-surface) 8%,\n            transparent\n        );\n    }\n \n    &:hover:not(:checked, :indeterminate, :disabled) {\n        border-color: var(--color-on-surface);\n    }\n \n    &:active,\n    &:hover:not(:disabled)::after {\n        content: "";\n        animation: ripple var(--transition-standard-default-effects) forwards;\n \n        &:active::after {\n            background-color: color-mix(\n                in srgb,\n                var(--color-on-surface) 12%,\n                transparent\n            );\n        }\n    }\n \n    &:checked,\n    &:indeterminate {\n        border-color: transparent;\n        background-color: var(--color-primary);\n \n        &::before {\n            height: calc(var(--checkbox-size) / 2);\n            border-color: var(--color-on-primary);\n        }\n \n        &:indeterminate::before {\n            height: 0;\n            width: 80%;\n            border-inline-end: none;\n            transform: translate(-50%, -50%) rotate(0deg);\n        }\n    }\n \n    &:disabled {\n        pointer-events: none;\n        border-color: color-mix(in srgb, var(--color-on-surface) 38%, transparent);\n \n        &:checked,\n        &:indeterminate {\n            border-color: transparent;\n            background-color: color-mix(\n                in srgb,\n                var(--color-on-surface) 38%,\n                transparent\n            );\n \n            &::before {\n                border-color: var(--color-surface);\n            }\n        }\n    }\n \n    &:focus-visible {\n        animation: focus var(--transition-standard-slow-spatial) forwards;\n    }\n}',
      },
    },
    {
      id: "indeterminate",
      label: "Indeterminate",
      preview: CheckboxIndeterminate,
      code: 'import { useEffect, useRef } from "react";\nimport Checkbox from "@/components/ui/checkbox";\n \nexport function CheckboxIndeterminate() {\n    const ref = useRef<HTMLInputElement>(null);\n \n    useEffect(() => {\n        if (ref.current) ref.current.indeterminate = true;\n    }, []);\n \n    return (\n        <div className="demo">\n            <Checkbox ref={ref} />\n        </div>\n    );\n};',
    },
    {
      id: "with-label",
      label: "With Label",
      preview: CheckboxWithLabel,
      code: 'import Checkbox from "@/components/ui/checkbox";\n \nexport function CheckboxWithLabel() {\n    return (\n        <div className="demo">\n            <label>\n                <Checkbox name="duration" value="daily" defaultChecked />\n                Daily\n            </label>\n            <label>\n                <Checkbox name="duration" value="weekly" />\n                Weekly\n            </label>\n            <label>\n                <Checkbox name="duration" value="monthly" />\n                Monthly\n            </label>\n        </div>\n    );\n};',
    },
    {
      id: "disabled",
      label: "Disabled",
      preview: CheckboxDisabled,
      code: 'import { useEffect, useRef } from "react";\nimport Checkbox from "@/components/ui/checkbox";\n \nexport function CheckboxDisabled() {\n    const ref = useRef<HTMLInputElement>(null);\n \n    useEffect(() => {\n        if (ref.current) ref.current.indeterminate = true;\n    }, []);\n    return (\n        <div className="demo">\n            <Checkbox defaultChecked disabled />\n            <Checkbox ref={ref} disabled />\n            <Checkbox disabled />\n        </div>\n    );\n};',
    },
  ],
};

export default CHECKBOX_DEMO;
