import { createContext, useState, type ReactNode } from "react";
import { applyTheme, getColorScheme, getPrimary, getTheme, getTokens } from "@/util/theme";
import type { HexColor, Theme, ThemeContextDefinition } from "@/types/context";

const ThemeContext = createContext<ThemeContextDefinition | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getTheme());
  const [primary, setPrimary] = useState<HexColor>(getPrimary());

  function updatePrimary(primary: HexColor) {
    setPrimary(primary);
    applyTheme(primary, theme);
  }

  function toggleTheme() {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      applyTheme(primary, newTheme);

      return newTheme;
    });
  }

  return (
    <ThemeContext
      value={{
        primary,
        theme,
        scheme: getColorScheme()?.textContent || "",
        tokens: getTokens(),
        setPrimary: updatePrimary,
        toggleTheme,
      }}>
      {children}
    </ThemeContext>
  );
};

export { ThemeContext, ThemeProvider };
