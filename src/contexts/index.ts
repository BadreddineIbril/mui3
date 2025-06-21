import { useContext } from "react";
import { ThemeContext } from "./theme.context";

const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useTheme component must be used within a ThemeProvider");

  return ctx;
};

export { useTheme };
