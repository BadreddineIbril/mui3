import { useEffect } from "react";
import { useTheme } from "@/composables/use-theme";
import Controls from "@/pages/docs/components/controls";
import Preview from "@/pages/docs/components/playground";
import OnThisPage from "@/pages/docs/components/on-this-page";

const Docs = () => {
  useEffect(() => {
    useTheme("#ecf39e");
  }, []);

  return (
    <main mui-page="docs">
      <Controls />
      <Preview />
      <OnThisPage />
    </main>
  );
};

export default Docs;
