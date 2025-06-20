import type { DemoDefinition } from "@/types/demo";

export interface ComponentGroupDefinition {
  id: string;
  label: string;
  components: DemoDefinition[];
}

export interface GetStartedDefinition {
  id: string;
  label: string;
  links: { label: string; href: string }[];
}
