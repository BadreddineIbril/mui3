import Sidebar from "./_components/sidebar";
import Preview from "./_components/preview";
import { useTheme } from "@/composables/use-theme";
import { useEffect } from "react";

const Doc = () => {
  useEffect(() => {
    useTheme("#00ffff");
  }, []);

  return (
    <main data-page="doc">
      <Sidebar />
      <Preview />
    </main>
  );
};

export default Doc;
