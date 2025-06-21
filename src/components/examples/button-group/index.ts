import type { DemoDefinition } from "@/types/demo";
import ButtonGroupDemo from "./button-group-demo";
import ButtonGroupSize from "./button-group-size";
import ButtonGroupType from "./button-group-type";
import ButtonGroupVariant from "./button-group-variant";
import ButtonGroupWithIcon from "./button-group-with-icon";
import ButtonGroupIconOnly from "./button-group-icon-only";
import ButtonGroupDisabled from "./button-group-disabled";

const BUTTON_GROUP_DEMO: DemoDefinition = {
  id: "button-group",
  label: "Button Group",
  description:
    "Button groups organize buttons and add interactions between them",
  content: [
    {
      id: "overview",
      label: "Overview",
      preview: ButtonGroupDemo,
      code: 'import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";\n \nexport function ButtonGroupDemo() {\n    return (\n        <div className="demo">\n            <ButtonGroup>\n                <ButtonGroupItem>Start</ButtonGroupItem>\n                <ButtonGroupItem>Directions</ButtonGroupItem>\n                <ButtonGroupItem>Share</ButtonGroupItem>\n            </ButtonGroup>\n        </div>\n    );\n}',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport { createContext, useContext, type ComponentProps } from "react";\nimport Button from "@/components/ui/button";\nimport IconButton from "@/components/ui/icon-button";\n \ntype ButtonProps = ComponentProps<typeof Button>;\ntype IconButtonProps = ComponentProps<typeof IconButton>;\ntype Variant = ButtonProps["variant"] | IconButtonProps["variant"];\n \ntype ButtonGroupProps = ComponentProps<"div"> & {\n    type?: "standard" | "connected";\n    variant?: Variant;\n    width?: IconButtonProps["width"];\n    size?: ButtonProps["size"];\n    disabled?: ButtonProps["disabled"];\n    asIcon?: boolean;\n};\ntype ButtonGroupItemProps = ComponentProps<"button"> & {\n    variant?: Variant;\n    width?: IconButtonProps["width"];\n    rounded?: ButtonProps["rounded"];\n    asIcon?: boolean;\n};\n \nconst ButtonGroupContext = createContext<{\n    variant: Variant;\n    width: IconButtonProps["width"];\n    size: ButtonProps["size"];\n    disabled: ButtonProps["disabled"];\n    asIcon: boolean;\n} | null>(null);\n \nconst useButtonGroupContext = () => {\n    const ctx = useContext(ButtonGroupContext);\n    if (!ctx)\n        throw new Error(\n            "Button Group component must be used within a Button Group provider"\n        );\n \n    return ctx;\n};\n \nconst ButtonGroup = ({\n    type = "standard",\n    variant = "tonal",\n    disabled,\n    width = "default",\n    asIcon = false,\n    size = "xs",\n    ...props\n}: ButtonGroupProps) => {\n    return (\n        <ButtonGroupContext.Provider\n            value={{ variant, disabled, width, asIcon, size }}>\n            <div mui-button-group={type} data-size={size} {...props} />\n        </ButtonGroupContext.Provider>\n    );\n};\n \nconst ButtonGroupItem = ({\n    variant,\n    disabled,\n    width,\n    rounded,\n    asIcon,\n    ...props\n}: ButtonGroupItemProps) => {\n    const ctx = useButtonGroupContext();\n    const Component = asIcon || ctx.asIcon ? IconButton : Button;\n \n    return (\n        <Component\n            mui-button-group-item=""\n            variant={variant ?? ctx.variant}\n            disabled={disabled ?? ctx.disabled}\n            width={width ?? ctx.width}\n            size={ctx.size}\n            rounded={rounded}\n            {...props}\n        />\n    );\n};\n \nexport { ButtonGroup, ButtonGroupItem };',
        css: '[mui-button-group] {\n    --button-group-item-radius: var(--radius-xl);\n \n    display: flex;\n \n    &[mui-button-group="standard"] {\n        &[data-size="xs"] {\n            gap: calc(var(--spacing-16) + var(--spacing-2));\n        }\n \n        &[data-size="sm"] {\n            gap: var(--spacing-12);\n        }\n \n        &[data-size="md"],\n        &[data-size="lg"],\n        &[data-size="xl"] {\n            gap: var(--spacing-8);\n        }\n    }\n \n    &[mui-button-group="connected"] {\n        gap: var(--spacing-2);\n \n        &[data-size="xs"] {\n            [mui-button-group-item]:not([data-rounded="true"]) {\n                border-radius: var(--spacing-4);\n            }\n        }\n \n        &[data-size="sm"],\n        &[data-size="md"] {\n            [mui-button-group-item]:not([data-rounded="true"]) {\n                border-radius: var(--spacing-8);\n            }\n        }\n \n        &[data-size="lg"] {\n            --button-group-item-radius: var(--radius-xxl);\n \n            [mui-button-group-item]:not([data-rounded="true"]) {\n                border-radius: var(--spacing-16);\n            }\n        }\n \n        &[data-size="xl"] {\n            --button-group-item-radius: calc(var(--radius-xxl) * 2);\n \n            [mui-button-group-item]:not([data-rounded="true"]) {\n                border-radius: calc(var(--spacing-16) + var(--spacing-4));\n            }\n        }\n \n        [mui-button-group-item]:not([data-rounded="true"]) {\n            &:first-child {\n                border-end-start-radius: var(--button-group-item-radius);\n                border-start-start-radius: var(--button-group-item-radius);\n            }\n \n            &:last-child {\n                border-start-end-radius: var(--button-group-item-radius);\n                border-end-end-radius: var(--button-group-item-radius);\n            }\n        }\n    }\n}',
      },
    },
    {
      id: "variant",
      label: "Variant",
      preview: ButtonGroupVariant,
      code: 'import Icon from "@/components/misc/icon";\nimport { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";\n \nexport function ButtonGroupVariant() {\n    const variants: Array<"elevated" | "filled" | "tonal" | "outlined"> = [\n        "elevated",\n        "filled",\n        "tonal",\n        "outlined",\n    ];\n \n    return (\n        <div className="demo">\n            {variants.map((variant) => (\n                <ButtonGroup variant={variant}>\n                    <ButtonGroupItem>\n                        <Icon name="directions_car" />\n                        Start\n                    </ButtonGroupItem>\n                    <ButtonGroupItem>\n                        <Icon name="directions_car" />\n                        Directions\n                    </ButtonGroupItem>\n                    <ButtonGroupItem>\n                        <Icon name="share" />\n                        Share\n                    </ButtonGroupItem>\n                </ButtonGroup>\n            ))}\n        </div>\n    );\n};',
    },
    {
      id: "type",
      label: "Type",
      preview: ButtonGroupType,
      code: 'import Icon from "@/components/misc/icon";\nimport { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";\n \nexport function ButtonGroupType() {\n    const types: Array<"standard" | "connected"> = ["standard", "connected"];\n \n    return (\n        <div className="demo">\n            {types.map((type) => (\n                <ButtonGroup type={type}>\n                    <ButtonGroupItem>\n                        <Icon name="directions_car" />\n                        Start\n                    </ButtonGroupItem>\n                    <ButtonGroupItem>\n                        <Icon name="directions_car" />\n                        Directions\n                    </ButtonGroupItem>\n                    <ButtonGroupItem>\n                        <Icon name="share" />\n                        Share\n                    </ButtonGroupItem>\n                </ButtonGroup>\n            ))}\n        </div>\n    );\n};',
    },
    {
      id: "size",
      label: "Size",
      preview: ButtonGroupSize,
      code: 'import Icon from "@/components/misc/icon";\nimport { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";\n \nexport function ButtonGroupSize() {\n    const sizes: Array<"xs" | "sm" | "md" | "lg" | "xl"> = [\n        "xs",\n        "sm",\n        "md",\n        "lg",\n        "xl",\n    ];\n \n    return (\n        <div className="demo">\n            {sizes.map((size) => (\n                <ButtonGroup size={size}>\n                    <ButtonGroupItem>\n                        <Icon name="bluetooth" />\n                    </ButtonGroupItem>\n                    <ButtonGroupItem>\n                        <Icon name="alarm" />\n                    </ButtonGroupItem>\n                    <ButtonGroupItem>\n                        <Icon name="link" />\n                    </ButtonGroupItem>\n                    <ButtonGroupItem>\n                        <Icon name="wifi" />\n                    </ButtonGroupItem>\n                </ButtonGroup>\n            ))}\n        </div>\n    );\n};',
    },
    {
      id: "disabled",
      label: "Disabled",
      preview: ButtonGroupDisabled,
      code: 'import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";\n \nexport function ButtonGroupDisabled() {\n    return (\n        <div className="demo">\n            <ButtonGroup disabled>\n                <ButtonGroupItem>Start</ButtonGroupItem>\n                <ButtonGroupItem>Directions</ButtonGroupItem>\n                <ButtonGroupItem>Share</ButtonGroupItem>\n            </ButtonGroup>\n        </div>\n    );\n};',
    },
    {
      id: "with-icon",
      label: "With Icon",
      preview: ButtonGroupWithIcon,
      code: 'import Icon from "@/components/misc/icon";\nimport { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";\n \nexport function ButtonGroupWithIcon() {\n    return (\n        <div className="demo">\n            <ButtonGroup>\n                <ButtonGroupItem>\n                    <Icon name="directions_car" />\n                    Start\n                </ButtonGroupItem>\n                <ButtonGroupItem>\n                    <Icon name="directions_car" />\n                    Directions\n                </ButtonGroupItem>\n                <ButtonGroupItem>\n                    <Icon name="share" />\n                    Share\n                </ButtonGroupItem>\n            </ButtonGroup>\n        </div>\n    );\n};',
    },
    {
      id: "icon-only",
      label: "Icon Only",
      preview: ButtonGroupIconOnly,
      code: 'import Icon from "@/components/misc/icon";\nimport { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";\n \nexport default ButtonGroupIconOnly() {\n    return (\n        <div className="demo">\n            <ButtonGroup size="sm" variant="outlined" asIcon>\n                <ButtonGroupItem width="narrow">\n                    <Icon name="bluetooth" />\n                </ButtonGroupItem>\n                <ButtonGroupItem>\n                    <Icon name="alarm" />\n                </ButtonGroupItem>\n                <ButtonGroupItem width="wide">\n                    <Icon name="link" />\n                </ButtonGroupItem>\n                <ButtonGroupItem>\n                    <Icon name="wifi" />\n                </ButtonGroupItem>\n            </ButtonGroup>\n        </div>\n    );\n};',
    },
  ],
};

export default BUTTON_GROUP_DEMO;
