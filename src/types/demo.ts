import type { JSX } from "react";

export interface DemoDefinition {
  id: ComponentIdDefinition;
  label: string;
  description: string;
  content: ContentDefinition[];
}

export type ComponentIdDefinition =
  | "button"
  | "icon-button"
  | "fab"
  | "button-group"
  | "split-button"
  | "radio"
  | "checkbox"
  | "switch"
  | "slider"
  | "chips"
  | "tabs"
  | "toolbar"
  | "navigation-bar"
  | "navigation-rail"
  | "side-sheet"
  | "dialog"
  | "snackbar"
  | "tooltip"
  | "list"
  | "select"
  | "list"
  | "text-field"
  | "toolbar"
  | "badge"
  | "card"
  | "divider";

interface ContentDefinition {
  id: string;
  label?: string;
  preview?: () => JSX.Element;
  code: string | { tsx: string; css: string };
}
