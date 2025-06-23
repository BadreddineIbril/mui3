import Intro from "@/components/get-started/intro";
import Prerequisite from "@/components/get-started/prerequisite";
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
        id: "prerequisite",
        label: "Prerequisite",
        description: "How to install dependencies and structure your app.",
        content: Prerequisite,
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
