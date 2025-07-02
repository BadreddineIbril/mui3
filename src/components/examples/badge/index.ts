import type { DemoDefinition } from "@/types/demo";
import BadgeDemo from "./badge-demo";
import BadgeSize from "./badge-size";

const BADGE_DEMO: DemoDefinition = {
  id: "badge",
  label: "Badge",
  description:
    "Badges show notifications, counts, or status information on navigation items and icons",
  content: [
    {
      id: "overview",
      label: "Overview",
      preview: BadgeDemo,
      code: 'import Icon from "@/components/misc/icon";\nimport IconButton from "@/components/ui/icon-button";\nimport Badge from "@/components/ui/badge";\n \nconst BadgeDemo = () => {\n    return (\n        <div className="demo">\n            <IconButton>\n                <Badge>\n                    <Icon name="groups" />\n                </Badge>\n            </IconButton>\n        </div>\n    );\n};\n \nexport default BadgeDemo;',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport type { ComponentProps } from "react";\n \ntype BadgeProps = ComponentProps<"span"> & {\n    size?: "sm" | "lg";\n    label?: string;\n};\n \nconst Badge = ({ size = "sm", label, ...props }: BadgeProps) => {\n    return <span mui-badge={size} data-label={label} {...props} />;\n};\n \nexport default Badge;',
        css: '[mui-badge] {\n    position: relative;\n    width: fit-content;\n \n    &::before {\n        position: absolute;\n        border-radius: var(--radius-rounded);\n        background-color: var(--color-error);\n    }\n \n    &[mui-badge="lg"][data-label]::before {\n        content: attr(data-label);\n        font: var(--font-label-sm);\n        color: var(--color-on-error);\n        padding-inline: var(--spacing-4);\n        inset-inline-start: 50%;\n        inset-block-start: calc(var(--spacing-4) * -1);\n    }\n \n    &:not([data-label])::before {\n        content: "";\n        width: 6px;\n        height: 6px;\n        inset-block-start: 0;\n        inset-inline-start: 100%;\n    }\n}',
      },
    },
    {
      id: "size",
      label: "Size",
      preview: BadgeSize,
      code: 'import Icon from "@/components/misc/icon";\nimport IconButton from "@/components/ui/icon-button";\nimport Badge from "@/components/ui/badge";\n \nconst BadgeSize = () => {\n    return (\n        <div className="demo">\n            <IconButton width="wide">\n                <Badge size="sm">\n                    <Icon name="groups" />\n                </Badge>\n            </IconButton>\n            <IconButton width="wide">\n                <Badge size="lg" label="999+">\n                    <Icon name="mail" />\n                </Badge>\n            </IconButton>\n        </div>\n    );\n};\n \nexport default BadgeSize;',
    },
  ],
};

export default BADGE_DEMO;
