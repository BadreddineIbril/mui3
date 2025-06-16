import type { JSX } from "react";

export interface DemoDefinition {
  id: string;
  label: string;
  description: string;
  content: DemoContentDefinition[];
}

interface DemoContentDefinition {
  id: string;
  label?: string;
  preview?: () => JSX.Element;
  code: string | { tsx: string; css: string };
}
