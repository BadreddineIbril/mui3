import type { JSX } from "react";

export interface ComponentsGroupDefinition {
  group: GroupDefinition;
  components: ComponentDefinition[];
}

export interface GroupDefinition {
  id: string;
  label: string;
}

export interface ComponentDefinition {
  id: string;
  label: string;
  demo: () => JSX.Element;
}
