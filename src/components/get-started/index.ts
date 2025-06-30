import Intro from "@/components/get-started/intro";
import Installation from "@/components/get-started/installation";
import Colors from "@/components/get-started/colors";
import Typography from "@/components/get-started/typography";
import type { GetStartedDefinition } from "@/types/common";

const GET_STARTED_LINKS: GetStartedDefinition[] = [
  {
    id: "overview",
    label: "Overview",
    links: [
      {
        id: "",
        label: "Introduction",
        description:
          "An open source, lightweight collection of accessible Material Design 3 components",
        content: Intro,
        references: [
          { label: "Open Source", value: "open-source" },
          { label: "Syntax", value: "syntax" },
          { label: "Beta", value: "beta" },
        ],
      },
      {
        id: "installation",
        label: "Installation",
        description: "How to install dependencies and structure your app",
        content: Installation,
        references: [
          { label: "Create a project", value: "create-a-project" },
          { label: "Alias", value: "alias" },
          { label: "Icons", value: "icons" },
          { label: "Font", value: "font" },
          { label: "Tokens", value: "tokens" },
        ],
      },
    ],
  },
  {
    id: "foundations",
    label: "Foundations",
    links: [
      {
        id: "colors",
        label: "Colors",
        description:
          "Colors create meaning and communicate hierarchy, state, and brand",
        content: Colors,
        references: [
          { label: "Primary", value: "primary" },
          { label: "Secondary", value: "secondary" },
          { label: "Tertiary", value: "tertiary" },
          { label: "Error", value: "error" },
          { label: "Surface", value: "surface" },
          { label: "Outline", value: "outline" },
          { label: "Background", value: "background" },
        ],
      },
      {
        id: "typography",
        label: "Typography",
        description: "Use typography to make content readable and beautiful",
        content: Typography,
        references: [
          { label: "Display", value: "display-lg" },
          { label: "Headline", value: "headline-lg" },
          { label: "Title", value: "title-lg" },
          { label: "Body", value: "body-lg" },
          { label: "Label", value: "label-lg" },
        ],
      },
    ],
  },
];

export default GET_STARTED_LINKS;
