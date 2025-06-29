import type { DemoDefinition } from "@/types/demo";
import ListDemo from "./list-demo";
import ListSupporting from "./list-supporting";
import ListOverline from "./list-overline";
import ListLeading from "./list-leading";
import ListWithDivider from "./list-divider";
import ListTrailing from "./list-trailing";
import ListTrailingSupporting from "./list-trailing-supporting";

const LIST_DEMO: DemoDefinition = {
  id: "list",
  label: "List",
  description: "Lists are continuous, vertical indexes of text and images",
  content: [
    {
      id: "overview",
      label: "Overview",
      preview: ListDemo,
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
      id: "with-supporting",
      label: "With Supporting",
      preview: ListSupporting,
      code: 'import Divider from "@/components/ui/divider";\n \nconst DividerOrientation = () => {\n    return (\n        <div className="demo">\n            <Divider orientation="horizontal" />\n            <Divider orientation="vertical" />\n        </div>\n    );\n};\n \nexport default DividerOrientation;',
    },
    {
      id: "with-trailing-supporting",
      label: "With Trailing Supporting",
      preview: ListTrailingSupporting,
      code: 'import Divider from "@/components/ui/divider";\n \nconst DividerOrientation = () => {\n    return (\n        <div className="demo">\n            <Divider orientation="horizontal" />\n            <Divider orientation="vertical" />\n        </div>\n    );\n};\n \nexport default DividerOrientation;',
    },
    {
      id: "with-overline",
      label: "With Overline",
      preview: ListOverline,
      code: 'import Divider from "@/components/ui/divider";\n \nconst DividerOrientation = () => {\n    return (\n        <div className="demo">\n            <Divider orientation="horizontal" />\n            <Divider orientation="vertical" />\n        </div>\n    );\n};\n \nexport default DividerOrientation;',
    },
    {
      id: "leading",
      label: "Leading",
      preview: ListLeading,
      code: 'import Divider from "@/components/ui/divider";\n \nconst DividerOrientation = () => {\n    return (\n        <div className="demo">\n            <Divider orientation="horizontal" />\n            <Divider orientation="vertical" />\n        </div>\n    );\n};\n \nexport default DividerOrientation;',
    },
    {
      id: "trailing",
      label: "Trailing",
      preview: ListTrailing,
      code: 'import Divider from "@/components/ui/divider";\n \nconst DividerOrientation = () => {\n    return (\n        <div className="demo">\n            <Divider orientation="horizontal" />\n            <Divider orientation="vertical" />\n        </div>\n    );\n};\n \nexport default DividerOrientation;',
    },
    {
      id: "divider",
      label: "Divider",
      preview: ListWithDivider,
      code: 'import Divider from "@/components/ui/divider";\n \nconst DividerOrientation = () => {\n    return (\n        <div className="demo">\n            <Divider orientation="horizontal" />\n            <Divider orientation="vertical" />\n        </div>\n    );\n};\n \nexport default DividerOrientation;',
    },
  ],
};

export default LIST_DEMO;
