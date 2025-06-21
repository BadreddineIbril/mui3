export interface ThemeContextDefinition {
  primary: HexColor;
  setPrimary: (color: HexColor) => void;
  theme: Theme;
  toggleTheme: () => void;
  scheme: string;
}

export type HexColor = `#${string}`;
export type Theme = "light" | "dark";
