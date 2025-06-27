import "@/assets/styles/main.css";
import AppRouter from "@/routes";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/theme.context";
import { applyTheme } from "@/util/theme";
import { getPrimary } from "@/util/theme";

// TODO: leave it for now, still need a better fix for the default color shift
applyTheme(getPrimary());

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <AppRouter />
  </ThemeProvider>
);
