import type { DemoDefinition } from "@/types/demo";
import NavigationRailDemo from "./navigation-rail-demo";
import NavigationRailAlignment from "./navigation-rail-alignment";

const NAVIGATION_RAIL_DEMO: DemoDefinition = {
  id: "navigation-rail",
  label: "Navigation rail",
  description:
    "Navigation rails let people switch between UI views on mid-sized devices",
  content: [
    {
      id: "overview",
      label: "Overview",
      preview: NavigationRailDemo,
      code: 'import Icon from "@/components/misc/icon";\nimport {\n    Rail,\n    RailBody,\n    RailFab,\n    RailHeader,\n    RailItem,\n    RailMenu,\n} from "@/components/ui/navigation-rail";\n \nconst NavigationRailDemo = () => {\n    return (\n        <div className="demo">\n            <Rail>\n                <RailHeader>\n                    <RailMenu>\n                        <Icon name="menu" />\n                    </RailMenu>\n                    <RailFab>\n                        <Icon name="hourglass_top" />\n                    </RailFab>\n                </RailHeader>\n                <RailBody alignment="bottom">\n                    <RailItem icon="schedule" label="Alarm" />\n                    <RailItem icon="star" label="Clock" />\n                    <RailItem icon="hourglass_top" label="Timer" selected />\n                    <RailItem icon="timer" label="Stopwatch" />\n                </RailBody>\n            </Rail>\n        </div>\n    );\n};\n \nexport default NavigationRailDemo;',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport type { ComponentProps, ButtonHTMLAttributes } from "react";\nimport Fab from "@/components/ui/fab";\nimport IconButton from "@/components/ui/icon-button";\nimport Icon from "@/components/misc/icon";\n \ntype RailProps = ComponentProps<"div">;\ntype RailHeaderProps = ComponentProps<"div">;\ntype RailMenuProps = ComponentProps<"button">;\ntype RailFabProps = ComponentProps<"button">;\ntype RailBodyProps = ComponentProps<"div"> & {\n    alignment?: "top" | "center" | "bottom";\n};\ntype RailItemProps = Omit<\n    ButtonHTMLAttributes<HTMLButtonElement>,\n    "children"\n> & {\n    icon: string;\n    label?: string;\n    selected?: boolean;\n};\n \nconst Rail = ({ ...props }: RailProps) => {\n    return <div mui-rail="" {...props} role="navigation" />;\n};\n \nconst RailHeader = ({ ...props }: RailHeaderProps) => {\n    return <div mui-rail-header="" {...props} />;\n};\n \nconst RailMenu = ({ ...props }: RailMenuProps) => {\n    return <IconButton mui-rail-menu="" {...props} size="md" />;\n};\n \nconst RailFab = ({ ...props }: RailFabProps) => {\n    return <Fab {...props} variant="soft-secondary" />;\n};\n \nconst RailBody = ({ alignment = "top", ...props }: RailBodyProps) => {\n    return <div mui-rail-body="" data-alignment={alignment} {...props} />;\n};\n \nconst RailItem = ({\n    icon,\n    label,\n    selected = false,\n    ...props\n}: RailItemProps) => {\n    return (\n        <div mui-rail-item="" role="option" aria-selected={selected}>\n            <IconButton {...props} size="md">\n                <Icon name={icon} />\n            </IconButton>\n            {label && <span mui-rail-item-label="">{label}</span>}\n        </div>\n    );\n};\n \nexport { Rail, RailHeader, RailMenu, RailFab, RailBody, RailItem };',
        css: '[mui-rail] {\n  width: 80px;\n  padding-block: 44px;\n  background-color: var(--color-surface-container);\n  display: flex;\n  gap: 40px;\n  align-items: center;\n  flex-direction: column;\n \n  &:has([data-alignment="center"]) {\n    [mui-rail-body] {\n      flex: 2;\n      justify-content: center;\n    }\n  }\n \n  &:has([data-alignment="bottom"]) {\n    justify-content: space-between;\n  }\n \n  [mui-rail-header],\n  [mui-rail-body] {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-4);\n  }\n \n  [mui-rail-body] {\n    [mui-rail-item] {\n      display: grid;\n      text-align: center;\n      gap: var(--spacing-4);\n      justify-content: center;\n \n      [mui-rail-item-label] {\n        font: var(--font-label-md);\n        color: var(--color-on-surface-variant);\n      }\n \n      &:has([mui-rail-item-label]) {\n        [mui-icon-button] {\n          width: 56px;\n          height: 32px;\n          border-radius: var(--radius-lg);\n        }\n      }\n \n      &[aria-selected="true"] {\n        [mui-icon-button] {\n          color: var(--color-on-secondary-container);\n          background-color: var(--color-secondary-container);\n        }\n \n        [mui-rail-item-label] {\n          color: var(--color-secondary);\n        }\n      }\n    }\n  }\n}',
      },
    },
    {
      id: "alignment",
      label: "Alignment",
      preview: NavigationRailAlignment,
      code: 'import Icon from "@/components/misc/icon";\nimport {\n    Rail,\n    RailBody,\n    RailFab,\n    RailHeader,\n    RailItem,\n    RailMenu,\n} from "@/components/ui/navigation-rail";\n \nconst NavigationRailAlignment = () => {\n    const alignments: Array<"top" | "center" | "bottom"> = [\n        "top",\n        "center",\n        "bottom",\n    ];\n \n    return (\n        <div className="demo">\n            {alignments.map((alignment) => (\n                <Rail key={alignment}>\n                    <RailHeader>\n                        <RailMenu>\n                            <Icon name="menu" />\n                        </RailMenu>\n                        <RailFab>\n                            <Icon name="hourglass_top" />\n                        </RailFab>\n                    </RailHeader>\n                    <RailBody alignment={alignment}>\n                        <RailItem icon="schedule" label="Alarm" />\n                        <RailItem icon="star" label="Clock" />\n                        <RailItem icon="hourglass_top" label="Timer" selected />\n                        <RailItem icon="timer" label="Stopwatch" />\n                    </RailBody>\n                </Rail>\n            ))}\n        </div>\n    );\n};\n \nexport default NavigationRailAlignment;',
    },
  ],
};

export default NAVIGATION_RAIL_DEMO;
