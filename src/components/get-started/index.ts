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
      { id: "", label: "Introduction", description: "Material 3", content: Intro },
      {
        id: "installation",
        label: "Installation",
        description: "How to install dependencies and structure your app.",
        content: Installation,
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
      },
      {
        id: "typography",
        label: "Typography",
        description: "Use typography to make content readable and beautiful",
        content: Typography,
      },
    ],
  },
];

export default GET_STARTED_LINKS;
