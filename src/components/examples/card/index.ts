import type { DemoDefinition } from "@/types/demo";
import CardDemo from "./card-demo";
import CardVariant from "./card-variant";
import CardInteractive from "./card-interactive";

const CARD_DEMO: DemoDefinition = {
  id: "card",
  label: "Card",
  description: "Cards display content and actions about a single subject",
  content: [
    {
      id: "overview",
      label: "Overview",
      preview: CardDemo,
      code: 'import Button from "@/components/ui/button";\nimport { Card } from "@/components/ui/card";\n \nexport function CardDemo() {\n    return (\n        <div className="demo">\n            <Card>\n                <h2 className="title">Play relaxing songs</h2>\n                <p className="description">From your recent favorites</p>\n                <div className="actions">\n                    <Button rounded>Get started</Button>\n                </div>\n            </Card>\n        </div>\n    );\n};',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport type { ComponentProps } from "react";\n \ntype CardProps = ComponentProps<"div"> & {\n    variant?: "elevated" | "filled" | "outlined";\n};\ntype CardActionAreaProps = ComponentProps<"button">;\n \nconst Card = ({ variant = "elevated", ...props }: CardProps) => {\n    return <div mui-card={variant} {...props} />;\n};\n \nconst CardActionArea = ({ ...props }: CardActionAreaProps) => {\n    return <button mui-card-action-area="" {...props} />;\n};\n \nexport { Card, CardActionArea };',
        css: '[mui-card] {\n    color: var(--color-on-surface);\n    border-radius: var(--radius-md);\n    background-color: var(--card-bg);\n    transition: var(--transition-standard-fast-effects);\n \n    &[mui-card="elevated"] {\n        --card-bg: var(--color-surface-container-low);\n \n        box-shadow: var(--shadow-2);\n    }\n \n    &[mui-card="filled"] {\n        --card-bg: var(--color-surface-container-highest);\n    }\n \n    &[mui-card="outlined"] {\n        --card-bg: var(--color-surface);\n \n        border: 1px solid var(--color-outline-variant);\n    }\n \n    [mui-card-action-area] {\n        width: 100%;\n        height: 100%;\n        border: none;\n        cursor: pointer;\n        position: relative;\n        border-radius: inherit;\n        color: inherit;\n        background-color: transparent;\n        outline-offset: 1px;\n        outline: 10px solid transparent;\n        transition: inherit;\n \n        &::before {\n            inset: 0;\n            opacity: 0;\n            position: absolute;\n            border-radius: inherit;\n            outline: 1px solid color-mix(in srgb, currentColor 12%, transparent);\n            background-color: color-mix(in srgb, currentColor 12%, transparent);\n        }\n \n        &:hover {\n            background-color: color-mix(in srgb, currentColor 8%, transparent);\n        }\n \n        &:active::before {\n            content: "";\n            animation: ripple var(--transition-standard-default-effects) forwards;\n        }\n \n        &:focus-visible {\n            animation: focus var(--transition-standard-slow-spatial) forwards;\n        }\n    }\n \n    &:has([mui-card-action-area]:disabled) {\n        pointer-events: none;\n        color: color-mix(in srgb, currentColor 38%, transparent);\n \n        &[mui-card="outlined"] {\n            background-color: transparent;\n        }\n \n        &[mui-card="filled"],\n        &[mui-card="elevated"] {\n            background-color: color-mix(in srgb, currentColor 10%, transparent);\n        }\n    }\n}',
      },
    },
    {
      id: "variant",
      label: "Variant",
      preview: CardVariant,
      code: 'import { Card } from "@/components/ui/card";\n \nexport function CardVariant() {\n    return (\n        <div className="demo">\n            <Card variant="elevated">Elevated</Card>\n            <Card variant="filled">Filled</Card>\n            <Card variant="outlined">Outline</Card>\n        </div>\n    );\n};',
    },
    {
      id: "interactive",
      label: "Interactive",
      preview: CardInteractive,
      code: 'import { Card, CardActionArea } from "@/components/ui/card";\n \nexport function CardInteractive() {\n    return (\n        <div className="demo">\n            <Card variant="elevated">\n                <CardActionArea>Elevated</CardActionArea>\n            </Card>\n            <Card variant="filled">\n                <CardActionArea>Filled</CardActionArea>\n            </Card>\n            <Card variant="outlined">\n                <CardActionArea>Outline</CardActionArea>\n            </Card>\n        </div>\n    );\n};',
    },
  ],
};

export default CARD_DEMO;
