import type { JSX } from "react";
import type { DemoDefinition } from "@/types/demo";

export interface ComponentGroupDefinition {
  id: string;
  label: string;
  components: DemoDefinition[];
}

export interface GetStartedDefinition {
  id: GetStartedId;
  label: string;
  links: {
    id: GetStartedLinkId;
    label: string;
    description: string;
    content: () => JSX.Element;
    references?: { label: string; value: string }[];
  }[];
}

export type GetStartedId = "overview" | "foundations";
export type GetStartedLinkId = "" | "installation" | "colors" | "typography";
