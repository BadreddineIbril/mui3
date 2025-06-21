import type { DemoDefinition } from "@/types/demo";
import RadioDemo from "./radio-demo";
import RadioDisabled from "./radio-disabled";
import RadioWithLabel from "./radio-with-label";

const RADIO_DEMO: DemoDefinition = {
  id: "radio",
  label: "Radio",
  description:
    "Radio buttons let people select one option from a set of options",
  content: [
    {
      id: "overview",
      label: "Overview",
      preview: RadioDemo,
      code: 'import Radio from "@/components/ui/radio";\n \nexport function RadioDemo() {\n    return (\n        <div className="demo">\n            <Radio />\n        </div>\n    );\n};',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport type { ComponentProps } from "react";\n \ntype RadioProps = Omit<ComponentProps<"input">, "type">;\n \nconst Radio = ({ ...props }: RadioProps) => {\n    return <input mui-radio="" {...props} type="radio" />;\n};\n \nexport default Radio;',
        css: `[mui-radio] {\n    --radio-size: 20px;\n    --radio-offset: calc(var(--radio-size) / 4);\n    --radio-dot-size: calc(var(--radio-size) * 0.5);\n \n    cursor: pointer;\n    position: relative;\n    appearance: none;\n    -webkit-appearance: none;\n    width: var(--radio-size);\n    height: var(--radio-size);\n    margin: var(--radio-offset);\n    outline-offset: 10px;\n    outline: 10px solid transparent;\n    border-radius: var(--radius-circled);\n    border: 2px solid var(--color-on-surface-variant);\n    transition: var(--transition-standard-fast-effects);\n \n    &::before {\n        content: "";\n        scale: 0;\n        position: absolute;\n        clip-path: circle();\n        translate: -50% -50%;\n        left: 50%;\n        inset-block-start: 50%;\n        width: var(--radio-dot-size);\n        height: var(--radio-dot-size);\n        background-color: var(--color-primary);\n        transition: var(--transition-standard-default-effects);\n    }\n \n    &::after {\n        inset: 0;\n        scale: 2.5;\n        opacity: 0;\n        position: absolute;\n        border-radius: var(--radius-circled);\n        background-color: color-mix(\n            in srgb,\n            var(--color-on-surface) 8%,\n            transparent\n        );\n    }\n \n    &:hover:not(:checked, :disabled) {\n        border-color: var(--color-on-surface);\n    }\n \n    &:active,\n    &:hover:not(:disabled)::after {\n        content: "";\n        animation: ripple var(--transition-standard-default-effects) forwards;\n \n        &:active::after {\n            background-color: color-mix(\n                in srgb,\n                var(--color-on-surface) 12%,\n                transparent\n            );\n        }\n    }\n \n    &:checked {\n        border-color: var(--color-primary);\n \n        &::before {\n            scale: 1;\n        }\n    }\n \n    &:disabled {\n        pointer-events: none;\n        border-color: color-mix(in srgb, var(--color-on-surface) 38%, transparent);\n \n        &:checked::before {\n            background-color: color-mix(\n                in srgb,\n                var(--color-on-surface) 38%,\n                transparent\n            );\n        }\n    }\n \n    &:focus-visible {\n        animation: focus var(--transition-standard-slow-spatial) forwards;\n    }\n}`,
      },
    },
    {
      id: "with-label",
      label: "With Label",
      preview: RadioWithLabel,
      code: 'import Radio from "@/components/ui/radio";\n \nexport function RadioWithLabel() {\n    return (\n        <div className="demo">\n            <label>\n                <Radio name="lang" value="en" defaultChecked />\n                English\n            </label>\n            <label>\n                <Radio name="lang" value="es" />\n                Spanish\n            </label>\n            <label>\n                <Radio name="lang" value="ar" />\n                Arabic\n            </label>\n        </div>\n    );\n};',
    },
    {
      id: "disabled",
      label: "Disabled",
      preview: RadioDisabled,
      code: 'import Radio from "@/components/ui/radio";\n \nexport function RadioDisabled() {\n    return (\n        <div className="demo">\n            <Radio defaultChecked disabled />\n            <Radio disabled />\n        </div>\n    );\n};',
    },
  ],
};

export default RADIO_DEMO;
