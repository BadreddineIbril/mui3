import type { DemoDefinition } from "@/types/demo";
import NavigationBarDemo from "./navigation-bar-demo";
import NavigationBarOrientation from "./navigation-bar-orientation";
import NavigationBarDisabled from "./navigation-bar-disabled";

const NAVIGATION_BAR_DEMO: DemoDefinition = {
  id: "navigation-bar",
  label: "Navigation bar",
  description:
    "Navigation bars let people switch between UI views on smaller devices",
  content: [
    {
      id: "overview",
      preview: NavigationBarDemo,
      code: 'import { useState } from "react";\nimport { Bar, BarItem } from "@/components/ui/navigation/bar";\n \nexport function NavigationBarDemo() {\n    const [active, setActive] = useState<number>(0);\n    const OPTIONS = [\n        { label: "Home", icon: "home" },\n        { label: "Browser", icon: "explore" },\n        { label: "Radio", icon: "radio" },\n        { label: "library", icon: "library_music" },\n    ];\n \n    return (\n        <div className="demo">\n            <Bar>\n                {OPTIONS.map((opt, i) => (\n                    <BarItem\n                        key={i}\n                        label={opt.label}\n                        icon={opt.icon}\n                        selected={active === i}\n                        onClick={() => setActive(i)}\n                    />\n                ))}\n            </Bar>\n        </div>\n    );\n};',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport {\n    Children,\n    useContext,\n    createContext,\n    type ButtonHTMLAttributes,\n    type CSSProperties,\n    type ComponentProps,\n} from "react";\nimport Icon from "@/components/misc/icon";\nimport Button from "@/components/ui/button";\nimport IconButton from "@/components/ui/icon-button";\n \ntype BarProps = ComponentProps<"div"> & {\n    orientation?: "horizontal" | "vertical";\n};\ntype BarItemProps = Omit<\n    ButtonHTMLAttributes<HTMLButtonElement>,\n    "children"\n> & {\n    icon: string;\n    label?: string;\n    selected?: boolean;\n};\n \nconst BarContext = createContext<{\n    orientation: "horizontal" | "vertical";\n} | null>(null);\n \nconst useBarContext = () => {\n    const ctx = useContext(BarContext);\n    if (!ctx) throw new Error("BarItem must be used within a Bar component.");\n \n    return ctx;\n};\n \nconst Bar = ({ orientation = "horizontal", style, ...props }: BarProps) => {\n    return (\n        <BarContext.Provider value={{ orientation }}>\n            <div\n                mui-bar=""\n                aria-orientation={orientation}\n                {...props}\n                role="navigation"\n                style={\n                    {\n                        "--length": Children.count(props.children),\n                        ...style,\n                    } as CSSProperties\n                }\n            />\n        </BarContext.Provider>\n    );\n};\n \nconst BarItem = ({ icon, label, selected = false, ...props }: BarItemProps) => {\n    const { orientation } = useBarContext();\n \n    return (\n        <div mui-bar-item="" aria-selected={selected}>\n            {orientation === "horizontal" ? (\n                <>\n                    <IconButton {...props}>\n                        <Icon name={icon} />\n                    </IconButton>\n                    {label && <span mui-bar-item-label="">{label}</span>}\n                </>\n            ) : (\n                <Button variant="text" size="md" {...props}>\n                    <Icon name={icon} />\n                    {label}\n                </Button>\n            )}\n        </div>\n    );\n};\n \nexport { Bar, BarItem };',
        css: '[mui-bar] {\n    display: grid;\n    grid-template-columns: repeat(var(--length), 1fr);\n    background-color: var(--color-surface-container);\n \n    [mui-bar-item] {\n        display: grid;\n        text-align: center;\n        justify-content: center;\n \n        [mui-bar-item-label] {\n            font: var(--font-label-md);\n            color: var(--color-on-surface-variant);\n        }\n \n        &[aria-selected="true"] {\n            [mui-button],\n            [mui-icon-button] {\n                color: var(--color-on-secondary-container) !important;\n                background-color: var(--color-secondary-container);\n            }\n \n            [mui-bar-item-label] {\n                color: var(--color-secondary);\n            }\n        }\n    }\n \n    &[aria-orientation="horizontal"] {\n        [mui-bar-item] {\n            gap: var(--spacing-4);\n            padding-block: calc(var(--spacing-8) - var(--spacing-2));\n \n            & > [mui-icon-button] {\n                width: 56px;\n                height: 32px;\n                border-radius: var(--radius-lg);\n            }\n        }\n    }\n \n    &[aria-orientation="vertical"] {\n        [mui-bar-item] {\n            padding-block: var(--spacing-12);\n \n            & > [mui-button] {\n                height: 40px;\n                gap: var(--spacing-4);\n                font: var(--font-label-md);\n                border-radius: var(--radius-lg-inc);\n                color: var(--color-on-surface-variant);\n                padding: var(--spacing-8) var(--spacing-16);\n            }\n        }\n    }\n}',
      },
    },
    {
      id: "orientation",
      label: "Orientation",
      preview: NavigationBarOrientation,
      code: 'import { useState } from "react";\nimport { Bar, BarItem } from "@/components/ui/navigation/bar";\n \nexport function NavigationBarOrientation() {\n    const [active, setActive] = useState<number>(0);\n    const OPTIONS = [\n        { label: "Home", icon: "home" },\n        { label: "Browser", icon: "explore" },\n        { label: "Radio", icon: "radio" },\n        { label: "library", icon: "library_music" },\n    ];\n \n    const orientations: Array<"horizontal" | "vertical"> = [\n        "horizontal",\n        "vertical",\n    ];\n \n    return (\n        <div className="demo">\n            {orientations.map((orientation) => (\n                <Bar key={orientation} orientation={orientation}>\n                    {OPTIONS.map((opt, i) => (\n                        <BarItem\n                            key={i}\n                            label={opt.label}\n                            icon={opt.icon}\n                            selected={active === i}\n                            onClick={() => setActive(i)}\n                        />\n                    ))}\n                </Bar>\n            ))}\n        </div>\n    );\n};',
    },
    {
      id: "disabled",
      label: "Disabled",
      preview: NavigationBarDisabled,
      code: 'import { useState } from "react";\nimport { Bar, BarItem } from "@/components/ui/navigation/bar";\n \nexport function NavigationBarDisabled() {\n    const [active, setActive] = useState<number>(0);\n    const OPTIONS = [\n        { label: "Home", icon: "home" },\n        { label: "Browser", icon: "explore" },\n        { label: "Radio", icon: "radio" },\n        { label: "library", icon: "library_music" },\n    ];\n \n    return (\n        <div className="demo">\n            <Bar>\n                {OPTIONS.map((opt, i) => (\n                    <BarItem\n                        key={i}\n                        label={opt.label}\n                        icon={opt.icon}\n                        selected={active === i}\n                        disabled={i === 2}\n                        onClick={() => setActive(i)}\n                    />\n                ))}\n            </Bar>\n        </div>\n    );\n};',
    },
  ],
};

export default NAVIGATION_BAR_DEMO;
