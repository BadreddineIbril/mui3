import type { DemoDefinition } from "@/types/demo";
import ChipsDemo from "./chips-demo";
import ChipsVariant from "./chips-variant";
import ChipsLayout from "./chips-layout";
import ChipsAssist from "./chips-assist";
import ChipsSuggestion from "./chips-suggestion";
import ChipsFilter from "./chips-filter";
import ChipsInput from "./chips-input";
import ChipsDisabled from "./chips-disabled";

const CHIPS_DEMO: DemoDefinition = {
  id: "chips",
  label: "Chips",
  description:
    "Chips help people enter information, make selections, filter content, or trigger actions",
  content: [
    {
      id: "overview",
      label: "Overview",
      preview: ChipsDemo,
      code: 'import { useState } from "react";\nimport { ChipItem, Chips } from "@/components/ui/chips";\n \nconst ChipsDemo = () => {\n    const [isSelected, setSelected] = useState<boolean>(false);\n    const [isRemoved, setRemoved] = useState<boolean>(false);\n \n    return (\n        <div className="demo">\n            <Chips>\n                <ChipItem variant="assist">Assist</ChipItem>\n                <ChipItem\n                    variant="filter"\n                    selected={isSelected}\n                    onSelect={() => setSelected(!isSelected)}>\n                    Filter\n                </ChipItem>\n                {!isRemoved && (\n                    <ChipItem variant="input" removable onRemove={() => setRemoved(true)}>\n                        Input\n                    </ChipItem>\n                )}\n                <ChipItem variant="suggestion">Suggestion</ChipItem>\n            </Chips>\n        </div>\n    );\n};\n \nexport default ChipsDemo;',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport type { ComponentProps } from "react";\nimport Icon from "@/components/misc/icon";\n \ntype ChipsProps = ComponentProps<"div"> & {\n    layout?: "wrap" | "scroll";\n    variant?: "outlined" | "elevated";\n};\n \ntype ChipItemProps = ComponentProps<"button"> & {\n    variant?: "assist" | "suggestion" | "filter" | "input";\n    selected?: boolean;\n    onSelect?: () => void;\n    removable?: boolean;\n    onRemove?: () => void;\n};\n \nconst Chips = ({\n    variant = "outlined",\n    layout = "wrap",\n    ...props\n}: ChipsProps) => {\n    return <div mui-chips={variant} data-layout={layout} {...props} />;\n};\n \nconst ChipItem = ({\n    variant = "assist",\n    selected,\n    onSelect,\n    removable,\n    onRemove,\n    children,\n    ...props\n}: ChipItemProps) => {\n    return (\n        <button\n            mui-chip-item={variant}\n            aria-selected={variant === "filter" && selected}\n            {...props}\n            onClick={(e) => {\n                props.onClick?.(e);\n                onSelect?.(e);\n            }}>\n            {variant === "filter" && selected && <Icon data-select name="check" />}\n            {children}\n            {variant === "input" && removable && (\n                <Icon data-close name="close" onClick={onRemove} />\n            )}\n        </button>\n    );\n};\n \nexport { Chips, ChipItem };',
        css: '[mui-chips] {\n    display: flex;\n    gap: var(--spacing-8);\n \n    &[data-layout="wrap"] {\n        flex-wrap: wrap;\n    }\n \n    &[data-layout="scroll"] {\n        overflow-x: scroll;\n    }\n \n    [mui-chip-item] {\n        height: 32px;\n        flex-shrink: 0;\n        cursor: pointer;\n        width: max-content;\n        position: relative;\n        padding-inline: var(--spacing-16);\n        display: flex;\n        align-items: center;\n        gap: var(--spacing-8);\n        color: var(--color-on-surface-variant);\n        background-color: transparent;\n        background-repeat: no-repeat;\n        background-position: center;\n        font: var(--font-label-lg);\n        border-radius: var(--radius-sm);\n        border: 1px solid transparent;\n        outline-offset: 1px;\n        outline: 10px solid transparent;\n        transition: var(--transition-standard-fast-effects);\n \n        &[aria-selected="true"] {\n            border-color: transparent !important;\n            color: var(--color-on-secondary-container);\n            background-color: var(--color-secondary-container);\n \n            &:hover {\n                background-color: color-mix(\n                    in srgb,\n                    currentColor 8%,\n                    var(--color-secondary-container)\n                );\n            }\n        }\n \n        &:has([mui-icon][data-close]) {\n            padding-inline-end: var(--spacing-8);\n        }\n \n        &:has([mui-icon]:not([data-close])) {\n            padding-inline-start: var(--spacing-8);\n        }\n \n        & > [mui-icon][data-close] {\n            z-index: 2;\n            width: 24px;\n            height: 24px;\n            font-size: 18px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border-radius: var(--radius-circled);\n \n            &:hover {\n                background-color: color-mix(in srgb, currentColor 8%, transparent);\n            }\n        }\n \n        & > [mui-icon]:not([data-close]) {\n            order: -1;\n            font-size: 18px;\n            position: relative;\n            color: var(--color-primary);\n \n            &:nth-child(n + 2) {\n                display: none;\n            }\n        }\n \n        &:hover:not(:has(> [data-close]:hover), [aria-selected="true"]) {\n            background-color: color-mix(in srgb, currentColor 8%, transparent);\n        }\n \n        &:active {\n            background-image: var(--ripple-circle);\n            animation: button-ripple var(--transition-expressive-default-spatial)\n                forwards;\n        }\n \n        &:focus-visible {\n            animation: focus var(--transition-standard-slow-spatial) forwards;\n        }\n \n        &:disabled {\n            pointer-events: none;\n            color: color-mix(in srgb, var(--color-on-surface) 38%, transparent);\n        }\n    }\n \n    &[mui-chips="outlined"] {\n        [mui-chip-item] {\n            border-color: var(--color-outline-variant);\n \n            &:disabled {\n                background-color: transparent;\n                border-color: color-mix(\n                    in srgb,\n                    var(--color-on-surface) 12%,\n                    transparent\n                );\n            }\n        }\n    }\n \n    &[mui-chips="elevated"] {\n        [mui-chip-item] {\n            box-shadow: var(--shadow-2);\n \n            &:hover:not(:has(> [data-close]:hover), [aria-selected="true"]) {\n                box-shadow: var(--shadow-3);\n            }\n \n            &:disabled {\n                box-shadow: none;\n                background-color: color-mix(\n                    in srgb,\n                    var(--color-on-surface) 12%,\n                    transparent\n                );\n            }\n        }\n    }\n}',
      },
    },
    {
      id: "variant",
      label: "Variant",
      preview: ChipsVariant,
      code: 'import { useState } from "react";\nimport { ChipItem, Chips } from "@/components/ui/chips";\n \nconst ChipsVariant = () => {\n    const variants: Array<"elevated" | "outlined"> = ["elevated", "outlined"];\n \n    const [isSelected, setSelected] = useState<boolean>(false);\n    const [isRemoved, setRemoved] = useState<boolean>(false);\n \n    return (\n        <div className="demo column">\n            {variants.map((variant) => (\n                <Chips key={variant} variant={variant}>\n                    <ChipItem variant="assist">Assist</ChipItem>\n                    <ChipItem\n                        variant="filter"\n                        selected={isSelected}\n                        onSelect={() => setSelected(!isSelected)}>\n                        Filter\n                    </ChipItem>\n                    {!isRemoved && (\n                        <ChipItem\n                            variant="input"\n                            removable\n                            onRemove={() => setRemoved(true)}>\n                            Input\n                        </ChipItem>\n                    )}\n                    <ChipItem variant="suggestion">Suggestion</ChipItem>\n                </Chips>\n            ))}\n        </div>\n    );\n};\n \nexport default ChipsVariant;',
    },
    {
      id: "layout",
      label: "Layout",
      preview: ChipsLayout,
      code: 'import Icon from "@/components/misc/icon";\nimport { ChipItem, Chips } from "@/components/ui/chips";\n \nconst ChipsLayout = () => {\n    const layouts: Array<"wrap" | "scroll"> = ["wrap", "scroll"];\n \n    return (\n        <div className="demo column">\n            {layouts.map((layout) => (\n                <Chips\n                    key={layout}\n                    layout={layout}\n                    style={{ width: layout === "wrap" ? "auto" : "50%" }}>\n                    <ChipItem variant="assist">Assist 1</ChipItem>\n                    <ChipItem variant="assist">\n                        <Icon name="map" /> Assist 2\n                    </ChipItem>\n                    <ChipItem variant="assist">Assist 3</ChipItem>\n                    <ChipItem variant="assist">Assist 4</ChipItem>\n                </Chips>\n            ))}\n        </div>\n    );\n};\n \nexport default ChipsLayout;',
    },
    {
      id: "assist",
      label: "Assist",
      preview: ChipsAssist,
      code: 'import Icon from "@/components/misc/icon";\nimport { ChipItem, Chips } from "@/components/ui/chips";\n \nconst ChipsAssist = () => {\n    return (\n        <div className="demo column">\n            <Chips>\n                <ChipItem variant="assist">Assist 1</ChipItem>\n                <ChipItem variant="assist">\n                    <Icon name="map" /> Assist 2\n                </ChipItem>\n                <ChipItem variant="assist">Assist 3</ChipItem>\n                <ChipItem variant="assist">Assist 4</ChipItem>\n            </Chips>\n        </div>\n    );\n};\n \nexport default ChipsAssist;',
    },
    {
      id: "suggestion",
      label: "Suggestion",
      preview: ChipsSuggestion,
      code: 'import { ChipItem, Chips } from "@/components/ui/chips";\n \nconst ChipsSuggestion = () => {\n    return (\n        <div className="demo">\n            <Chips>\n                <ChipItem variant="suggestion">Suggestion</ChipItem>\n                <ChipItem variant="suggestion">Suggestion</ChipItem>\n                <ChipItem variant="suggestion">Suggestion</ChipItem>\n            </Chips>\n        </div>\n    );\n};\n \nexport default ChipsSuggestion;',
    },
    {
      id: "filter",
      label: "Filter",
      preview: ChipsFilter,
      code: 'import { useState } from "react";\nimport { ChipItem, Chips } from "@/components/ui/chips";\n \nconst ChipsFilter = () => {\n    const [selected, setSelected] = useState<Array<string>>([]);\n \n    const toggleSelected = (item: string) => {\n        setSelected((prev) => {\n            if (prev.includes(item)) {\n                return prev.filter((i) => i !== item);\n            } else {\n                return [...prev, item];\n            }\n        });\n    };\n \n    return (\n        <div className="demo">\n            <Chips>\n                <ChipItem\n                    variant="filter"\n                    selected={selected.includes("filter1")}\n                    onSelect={() => toggleSelected("filter1")}>\n                    Filter 1\n                </ChipItem>\n                <ChipItem\n                    variant="filter"\n                    selected={selected.includes("filter2")}\n                    onSelect={() => toggleSelected("filter2")}>\n                    Filter 2\n                </ChipItem>\n                <ChipItem\n                    variant="filter"\n                    selected={selected.includes("filter3")}\n                    onSelect={() => toggleSelected("filter3")}>\n                    Filter 3\n                </ChipItem>\n            </Chips>\n        </div>\n    );\n};\n \nexport default ChipsFilter;',
    },
    {
      id: "input",
      label: "Input",
      preview: ChipsInput,
      code: 'import { useState } from "react";\nimport { ChipItem, Chips } from "@/components/ui/chips";\n \nconst ChipsInput = () => {\n    const [removed, setRemoved] = useState<boolean>(false);\n \n    return (\n        <div className="demo">\n            <Chips>\n                {!removed && (\n                    <ChipItem variant="input" removable onRemove={() => setRemoved(true)}>\n                        Input\n                    </ChipItem>\n                )}\n                <ChipItem variant="input">Input 2</ChipItem>\n                <ChipItem variant="input" disabled>\n                    Disabled\n                </ChipItem>\n            </Chips>\n        </div>\n    );\n};\n \nexport default ChipsInput;',
    },
    {
      id: "disabled",
      label: "Disabled",
      preview: ChipsDisabled,
      code: 'import { ChipItem, Chips } from "@/components/ui/chips";\n \nconst ChipsDisabled = () => {\n    return (\n        <div className="demo">\n            <Chips>\n                <ChipItem variant="assist" disabled>\n                    Assist\n                </ChipItem>\n                <ChipItem variant="suggestion" disabled>\n                    Suggestion\n                </ChipItem>\n                <ChipItem variant="filter" disabled selected>\n                    Filter\n                </ChipItem>\n                <ChipItem variant="input" disabled removable>\n                    Input\n                </ChipItem>\n            </Chips>\n        </div>\n    );\n};\n \nexport default ChipsDisabled;',
    },
  ],
};

export default CHIPS_DEMO;
