import type { DemoDefinition } from "@/types/demo";
import TooltipDemo from "./tooltip-demo";
import TooltipRich from "./tooltip-rich";

const TOOLTIP_DEMO: DemoDefinition = {
  id: "tooltip",
  label: "Tooltip",
  description: "Tooltips display brief labels or messages",
  content: [
    {
      id: "overview",
      preview: TooltipDemo,
      code: 'import Button from "@/components/ui/button";\nimport { Tooltip, TooltipContent } from "@/components/ui/tooltip";\n \nexport function TooltipDemo() {\n    return (\n        <div className="demo">\n            <Tooltip>\n                <Button variant="outlined">Hover or focus</Button>\n                <TooltipContent>Plain tooltip</TooltipContent>\n            </Tooltip>\n        </div>\n    );\n};',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport type { ComponentProps } from "react";\nimport Button from "@/components/ui/button";\n \ntype TooltipProps = ComponentProps<"div">;\ntype TooltipContentProps = ComponentProps<"div">;\ntype TooltipSubheadProps = ComponentProps<"p">;\ntype TooltipSupportingProps = ComponentProps<"p">;\ntype TooltipFooterProps = ComponentProps<"div">;\ntype TooltipActionProps = ComponentProps<"button">;\n \nconst Tooltip = ({ ...props }: TooltipProps) => {\n    return <div mui-tooltip="" {...props} />;\n};\n \nconst TooltipContent = ({ ...props }: TooltipContentProps) => {\n    return <div mui-tooltip-content="" {...props} role="tooltip" />;\n};\n \nconst TooltipSubhead = ({ ...props }: TooltipSubheadProps) => (\n    <p mui-tooltip-subhead="" {...props} />\n);\n \nconst TooltipSupporting = ({ ...props }: TooltipSupportingProps) => (\n    <p mui-tooltip-supporting="" {...props} />\n);\n \nconst TooltipFooter = ({ ...props }: TooltipFooterProps) => (\n    <div mui-tooltip-footer="" {...props} />\n);\n \nconst TooltipAction = ({ ...props }: TooltipActionProps) => (\n    <Button mui-tooltip-action="" {...props} variant="text" size="sm" />\n);\n \nexport {\n    Tooltip,\n    TooltipContent,\n    TooltipSubhead,\n    TooltipSupporting,\n    TooltipFooter,\n    TooltipAction,\n};',
        css: '[mui-tooltip] {\n    width: fit-content;\n    position: relative;\n \n    & > *:hover + [mui-tooltip-content],\n    & > *:focus-visible + [mui-tooltip-content],\n    [mui-tooltip-content]:hover {\n        scale: 1;\n        opacity: 1;\n        visibility: visible;\n        translate: -50% var(--spacing-8);\n    }\n \n    [mui-tooltip-content] {\n        scale: 0.9;\n        opacity: 0;\n        visibility: hidden;\n        z-index: 999;\n        min-height: 24px;\n        width: max-content;\n        max-width: 300px;\n        position: absolute;\n        font: var(--font-body-sm);\n        border-radius: var(--radius-sm);\n        padding-inline: var(--spacing-8);\n        color: var(--color-inverse-on-surface);\n        background-color: var(--color-inverse-surface);\n        translate: -50% var(--spacing-4);\n        left: 50%;\n        display: grid;\n        align-items: center;\n        transition: var(--transition-standard-slow-effects);\n \n        &:has([mui-tooltip-subhead], [mui-tooltip-supporting]) {\n            padding-inline: var(--spacing-0);\n            padding-block: var(--spacing-12) var(--spacing-8);\n            color: var(--color-on-surface-variant);\n            background-color: var(--color-surface-container);\n \n            &::before {\n                content: "";\n                position: absolute;\n                width: 100%;\n                height: var(--spacing-8);\n                inset-block-start: calc(var(--spacing-8) * -1);\n            }\n        }\n \n        [mui-tooltip-subhead] {\n            font: var(--font-title-sm);\n            padding-inline: var(--spacing-16);\n            margin-block-end: var(--spacing-4);\n        }\n \n        [mui-tooltip-supporting] {\n            font: var(--font-body-md);\n            padding-inline: var(--spacing-16);\n            margin-block-end: var(--spacing-12);\n        }\n \n        [mui-tooltip-footer] {\n            display: flex;\n            gap: var(--spacing-8);\n            padding-inline: var(--spacing-4);\n        }\n    }\n}',
      },
    },
    {
      id: "rich",
      label: "Rich",
      preview: TooltipRich,
      code: `import Button from "@/components/ui/button";\nimport {\n    Tooltip,\n    TooltipAction,\n    TooltipContent,\n    TooltipFooter,\n    TooltipSubhead,\n    TooltipSupporting,\n} from "@/components/ui/tooltip";\n \nexport function TooltipRich() {\n    return (\n        <div className="demo">\n            <Tooltip>\n                <Button variant="outlined">Hover or focus</Button>\n                <TooltipContent>\n                    <TooltipSubhead>Rich tooltip</TooltipSubhead>\n                    <TooltipSupporting>\n                        Rich tooltips bring attention to a particular element of feature\n                        that warrants the user's focus.\n                    </TooltipSupporting>\n                    <TooltipFooter>\n                        <TooltipAction>Action</TooltipAction>\n                    </TooltipFooter>\n                </TooltipContent>\n            </Tooltip>\n        </div>\n    );\n};`,
    },
  ],
};

export default TOOLTIP_DEMO;
