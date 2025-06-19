import type { DemoDefinition } from "@/types/demo";
import DividerDemo from "./divider-demo";
import DividerOrientation from "./divider-orientation";

const DIVIDER_DEMO: DemoDefinition = {
  id: "divider",
  label: "Divider",
  description:
    "Dividers are thin lines that group content in lists or other containers",
  content: [
    {
      id: "overview",
      preview: DividerDemo,
      code: 'import Divider from "@/components/ui/divider";\n \nconst DividerDemo = () => {\n    return (\n        <div className="demo">\n            <Divider />\n        </div>\n    );\n};\n \nexport default DividerDemo;',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport type { ComponentProps } from "react";\n \ntype DividerProps = ComponentProps<"hr"> & {\n    orientation?: "horizontal" | "vertical";\n};\n \nconst Divider = ({ orientation = "horizontal", ...props }: DividerProps) => (\n    <hr mui-divider={orientation} {...props} />\n);\n \nexport default Divider;',
        css: '[mui-divider] {\n    border: none;\n    background-color: var(--color-outline-variant);\n \n    &[mui-divider="horizontal"] {\n        height: 1px;\n        width: 100%;\n    }\n \n    &[mui-divider="vertical"] {\n        height: 100%;\n        width: 1px;\n    }\n}',
      },
    },
    {
      id: "orientation",
      label: "Orientation",
      preview: DividerOrientation,
      code: 'import Divider from "@/components/ui/divider";\n \nconst DividerOrientation = () => {\n    return (\n        <div className="demo">\n            <Divider orientation="horizontal" />\n            <Divider orientation="vertical" />\n        </div>\n    );\n};\n \nexport default DividerOrientation;',
    },
  ],
};

export default DIVIDER_DEMO;
