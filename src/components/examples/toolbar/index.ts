import type { DemoDefinition } from "@/types/demo";
import ToolbarDemo from "./toolbar-demo";
import ToolbarVariant from "./toolbar-variant";
import ToolbarType from "./toolbar-type";
import ToolbarOrientation from "./toolbar-orientation";
import ToolbarAlignment from "./toolbar-alignment";

const TOOLBAR_DEMO: DemoDefinition = {
  id: "toolbar",
  label: "Toolbar",
  description:
    "Toolbars display frequently used actions relevant to the current page",
  content: [
    {
      id: "overview",
      preview: ToolbarDemo,
      code: 'import Icon from "@/components/misc/icon";\nimport IconButton from "@/components/ui/icon-button";\nimport Toolbar from "@/components/ui/toolbar";\n \nexport function ToolbarDemo() {\n    return (\n        <div className="demo">\n            <Toolbar>\n                <IconButton>\n                    <Icon name="arrow_back" />\n                </IconButton>\n                <IconButton>\n                    <Icon name="arrow_forward" />\n                </IconButton>\n                <IconButton variant="filled" width="wide">\n                    <Icon name="add" />\n                </IconButton>\n                <IconButton>\n                    <Icon name="settings" />\n                </IconButton>\n                <IconButton>\n                    <Icon name="more_vert" />\n                </IconButton>\n            </Toolbar>\n        </div>\n    );\n};',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport type { ComponentProps } from "react";\n \ntype ToolbarProps = ComponentProps<"div"> & {\n    variant?: "docked" | "floating";\n    orientation?: "horizontal" | "vertical";\n    type?: "standard" | "vibrant";\n    alignment?: "spread" | "center";\n};\n \nconst Toolbar = ({\n    variant = "docked",\n    orientation = "horizontal",\n    alignment = "spread",\n    type = "standard",\n    ...props\n}: ToolbarProps) => {\n    return (\n        <div\n            mui-toolbar={variant}\n            data-type={type}\n            data-alignment={alignment}\n            aria-orientation={orientation}\n            {...props}\n            role="toolbar"\n        />\n    );\n};\n \nexport default Toolbar;',
        css: '[mui-toolbar] {\n    display: flex;\n    align-items: center;\n \n    &[data-alignment="center"] {\n        gap: var(--spacing-8);\n        justify-content: center;\n    }\n \n    &[data-alignment="spread"] {\n        justify-content: space-between;\n    }\n \n    &[mui-toolbar="floating"] {\n        width: fit-content;\n        gap: var(--spacing-4);\n        padding: var(--spacing-8);\n        box-shadow: var(--shadow-3);\n        border-radius: var(--radius-xl-inc);\n    }\n \n    &[data-type="standard"] {\n        background-color: var(--color-surface-container);\n    }\n \n    &[data-type="vibrant"] {\n        background-color: var(--color-primary-container);\n    }\n \n    &[aria-orientation="horizontal"] {\n        height: 64px;\n \n        &[mui-toolbar="docked"] {\n            padding-inline: var(--spacing-16);\n        }\n    }\n \n    &[aria-orientation="vertical"] {\n        width: 64px;\n        flex-direction: column;\n \n        &[mui-toolbar="docked"] {\n            padding-block: var(--spacing-16);\n        }\n    }\n}',
      },
    },
    {
      id: "variant",
      label: "Variant",
      preview: ToolbarVariant,
      code: 'import Icon from "@/components/misc/icon";\nimport IconButton from "@/components/ui/icon-button";\nimport Toolbar from "@/components/ui/toolbar";\n \nexport function ToolbarVariant() {\n    const variants: Array<"docked" | "floating"> = ["docked", "floating"];\n \n    return (\n        <div className="demo">\n            {variants.map((variant) => (\n                <Toolbar key={variant} variant={variant}>\n                    <IconButton>\n                        <Icon name="arrow_back" />\n                    </IconButton>\n                    <IconButton>\n                        <Icon name="arrow_forward" />\n                    </IconButton>\n                    <IconButton variant="filled" width="wide">\n                        <Icon name="add" />\n                    </IconButton>\n                    <IconButton>\n                        <Icon name="settings" />\n                    </IconButton>\n                    <IconButton>\n                        <Icon name="more_vert" />\n                    </IconButton>\n                </Toolbar>\n            ))}\n        </div>\n    );\n};',
    },
    {
      id: "type",
      label: "Type",
      preview: ToolbarType,
      code: 'import Button from "@/components/ui/button";\nimport Toolbar from "@/components/ui/toolbar";\n \nexport function ToolbarType() {\n    const types: Array<"standard" | "vibrant"> = ["standard", "vibrant"];\n \n    return (\n        <div className="demo">\n            {types.map((type) => (\n                <Toolbar key={type} type={type}>\n                    <Button variant="text" rounded>\n                        Back\n                    </Button>\n                    <Button rounded>Next</Button>\n                </Toolbar>\n            ))}\n        </div>\n    );\n};',
    },
    {
      id: "orientation",
      label: "Orientation",
      preview: ToolbarOrientation,
      code: 'import Icon from "@/components/misc/icon";\nimport IconButton from "@/components/ui/icon-button";\nimport Toolbar from "@/components/ui/toolbar";\n \nexport function ToolbarOrientation() {\n    const orientations: Array<"horizontal" | "vertical"> = [\n        "horizontal",\n        "vertical",\n    ];\n \n    return (\n        <div className="demo">\n            {orientations.map((orientation) => (\n                <Toolbar key={orientation} orientation={orientation} variant="floating">\n                    <IconButton>\n                        <Icon name="undo" />\n                    </IconButton>\n                    <IconButton>\n                        <Icon name="redo" />\n                    </IconButton>\n                    <IconButton>\n                        <Icon name="add" />\n                    </IconButton>\n                    <IconButton>\n                        <Icon name="text_format" />\n                    </IconButton>\n                    <IconButton>\n                        <Icon name="more_vert" />\n                    </IconButton>\n                </Toolbar>\n            ))}\n        </div>\n    );\n};',
    },
    {
      id: "alignment",
      label: "Alignment",
      preview: ToolbarAlignment,
      code: 'import Icon from "@/components/misc/icon";\nimport Button from "@/components/ui/button";\nimport IconButton from "@/components/ui/icon-button";\nimport { SplitButton, SplitButtonItem } from "@/components/ui/split-button";\nimport Toolbar from "@/components/ui/toolbar";\n \nexport function ToolbarAlignment() {\n    return (\n        <div className="demo">\n            <Toolbar alignment="spread">\n                <Button variant="text" rounded>\n                    Back\n                </Button>\n                <Button rounded>Next</Button>\n            </Toolbar>\n            <Toolbar alignment="center">\n                <SplitButton>\n                    <SplitButtonItem>\n                        <Icon name="videocam" />\n                        Yes\n                    </SplitButtonItem>\n                    <SplitButtonItem>\n                        <Icon name="keyboard_arrow_down" />\n                    </SplitButtonItem>\n                </SplitButton>\n                <Button variant="outlined">Next</Button>\n                <Button variant="outlined">Maybe</Button>\n                <IconButton variant="outlined">\n                    <Icon name="keyboard_arrow_down" />\n                </IconButton>\n            </Toolbar>\n        </div>\n    );\n};',
    },
  ],
};

export default TOOLBAR_DEMO;
