import { useEffect } from "react";
import { useTheme } from "@/composables/use-theme";
import StartBar from "@/pages/docs/components/start-bar";
import Preview from "@/pages/docs/components/playground";
import EndBar from "@/pages/docs/components/end-bar";

const Docs = () => {
  useEffect(() => {
    useTheme("#6750a4");
  }, []);

  return (
    <main mui-page="docs">
      <StartBar />
      <Preview />
      <EndBar />
    </main>
  );
};

export default Docs;
