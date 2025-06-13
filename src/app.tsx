import "@/assets/styles/_base/colors.css";
import "@/assets/styles/_base/tokens.css";
import "@/assets/styles/main.css";
import AppRouter from "@/routes";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(<AppRouter />);
