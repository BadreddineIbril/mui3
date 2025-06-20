import type { GetStartedDefinition } from "@/types/common";

const GET_STARTED_LINKS: GetStartedDefinition[] = [
  {
    id: "overview",
    label: "Overview",
    links: [
      { label: "Introduction", href: "intro" },
      { label: "Installation", href: "installation" },
    ],
  },
  {
    id: "foundations",
    label: "Foundations",
    links: [
      { label: "Colors", href: "colors" },
      { label: "Typography", href: "typography" },
    ],
  },
];

export default GET_STARTED_LINKS;
