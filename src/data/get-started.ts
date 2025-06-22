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
      { id: "", label: "Introduction", content: Intro },
      { id: "installation", label: "Installation", content: Installation },
    ],
  },
  {
    id: "foundations",
    label: "Foundations",
    links: [
      { id: "colors", label: "Colors", content: Colors },
      { id: "typography", label: "Typography", content: Typography },
    ],
  },
];

export default GET_STARTED_LINKS;
