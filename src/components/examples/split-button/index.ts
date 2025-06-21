import type { DemoDefinition } from "@/types/demo";
import SplitButtonDemo from "./split-button-demo";
import SplitButtonSize from "./split-button-size";
import SplitButtonVariant from "./split-button-variant";
import SplitButtonDisabled from "./split-button-disabled";

const SPLIT_BUTTON_DEMO: DemoDefinition = {
  id: "split-button",
  label: "Split Button",
  description:
    "Split buttons open a menu to give people more options related to an action",
  content: [
    {
      id: "overview",
      label: "Overview",
      preview: SplitButtonDemo,
      code: 'import Icon from "@/components/misc/icon";\nimport { SplitButton, SplitButtonItem } from "@/components/ui/split-button";\n \nexport function SplitButtonDemo {\n    return (\n        <div className="demo">\n            <SplitButton>\n                <SplitButtonItem>\n                    <Icon name="edit" />\n                    Label\n                </SplitButtonItem>\n                <SplitButtonItem>\n                    <Icon name="keyboard_arrow_down" />\n                </SplitButtonItem>\n            </SplitButton>\n        </div>\n    );\n};',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport { createContext, useContext, type ComponentProps } from "react";\nimport Button from "@/components/ui/button";\n \ntype ButtonProps = ComponentProps<typeof Button>;\ntype SegmentedButtonsProps = ComponentProps<"div"> & {\n    variant?: Exclude<ButtonProps["variant"], "text">;\n    size?: ButtonProps["size"];\n    disabled?: ButtonProps["disabled"];\n};\ntype SegmentedButtonProps = ComponentProps<"button">;\n \nconst SplitButtonContext = createContext<{\n    variant: Exclude<ButtonProps["variant"], "text">;\n    size: ButtonProps["size"];\n    disabled: ButtonProps["disabled"];\n} | null>(null);\n \nconst useSplitButtonContext = () => {\n    const ctx = useContext(SplitButtonContext);\n    if (!ctx)\n        throw new Error(\n            "Split Group component must be used within a Split Group provider"\n        );\n \n    return ctx;\n};\n \nconst SplitButton = ({\n    variant = "filled",\n    size = "xs",\n    disabled,\n    ...props\n}: SegmentedButtonsProps) => {\n    return (\n        <SplitButtonContext.Provider value={{ variant, size, disabled }}>\n            <div mui-split-button="" {...props} />\n        </SplitButtonContext.Provider>\n    );\n};\n \nconst SplitButtonItem = ({ ...props }: SegmentedButtonProps) => {\n    const { variant, size, disabled } = useSplitButtonContext();\n \n    return (\n        <Button\n            mui-split-button-item=""\n            disabled={disabled}\n            variant={variant}\n            size={size}\n            {...props}\n        />\n    );\n};\n \nexport { SplitButton, SplitButtonItem };',
        css: '[mui-split-button] {\n    --split-button-item-full-radius: var(--radius-xl);\n \n    display: flex;\n    gap: var(--spacing-2);\n \n    [mui-split-button-item] {\n        &:first-child {\n            border-start-start-radius: var(--split-button-item-full-radius);\n            border-end-start-radius: var(--split-button-item-full-radius);\n        }\n \n        &:last-child {\n            border-end-end-radius: var(--split-button-item-full-radius);\n            border-start-end-radius: var(--split-button-item-full-radius);\n        }\n    }\n \n    [data-size="xs"],\n    [data-size="sm"],\n    [data-size="md"] {\n        border-radius: var(--radius-xs);\n    }\n \n    [data-size="lg"] {\n        --split-button-item-full-radius: var(--radius-xxl);\n \n        border-radius: var(--radius-sm);\n    }\n \n    [data-size="xl"] {\n        --split-button-item-full-radius: calc(var(--radius-xxl) * 2);\n \n        border-radius: var(--radius-md);\n    }\n}',
      },
    },
    {
      id: "variant",
      label: "Variant",
      preview: SplitButtonVariant,
      code: 'import Icon from "@/components/misc/icon";\nimport { SplitButton, SplitButtonItem } from "@/components/ui/split-button";\n \nexport function SplitButtonVariant {\n    const variants: Array<"elevated" | "filled" | "tonal" | "outlined"> = [\n        "elevated",\n        "filled",\n        "tonal",\n        "outlined",\n    ];\n \n    return (\n        <div className="demo">\n            {variants.map((variant) => (\n                <SplitButton variant={variant}>\n                    <SplitButtonItem>\n                        <Icon name="edit" />\n                        Label\n                    </SplitButtonItem>\n                    <SplitButtonItem>\n                        <Icon name="keyboard_arrow_down" />\n                    </SplitButtonItem>\n                </SplitButton>\n            ))}\n        </div>\n    );\n};',
    },
    {
      id: "size",
      label: "Size",
      preview: SplitButtonSize,
      code: 'import Icon from "@/components/misc/icon";\nimport { SplitButton, SplitButtonItem } from "@/components/ui/split-button";\n \nexport function SplitButtonSize {\n    const sizes: Array<"xs" | "sm" | "md" | "lg" | "xl"> = [\n        "xs",\n        "sm",\n        "md",\n        "lg",\n        "xl",\n    ];\n \n    return (\n        <div className="demo">\n            {sizes.map((size) => (\n                <SplitButton size={size}>\n                    <SplitButtonItem>\n                        <Icon name="edit" />\n                        Label\n                    </SplitButtonItem>\n                    <SplitButtonItem>\n                        <Icon name="keyboard_arrow_down" />\n                    </SplitButtonItem>\n                </SplitButton>\n            ))}\n        </div>\n    );\n};',
    },
    {
      id: "disabled",
      label: "Disabled",
      preview: SplitButtonDisabled,
      code: 'import Icon from "@/components/misc/icon";\nimport { SplitButton, SplitButtonItem } from "@/components/ui/split-button";\n \nexport function SplitButtonDisabled {\n    return (\n        <div className="demo">\n            <SplitButton disabled>\n                <SplitButtonItem>\n                    <Icon name="edit" />\n                    Label\n                </SplitButtonItem>\n                <SplitButtonItem>\n                    <Icon name="keyboard_arrow_down" />\n                </SplitButtonItem>\n            </SplitButton>\n        </div>\n    );\n};',
    },
  ],
};

export default SPLIT_BUTTON_DEMO;
