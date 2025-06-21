import Controls from "@/pages/docs/components/controls";
import Preview from "@/pages/docs/components/playground";
import OnThisPage from "@/pages/docs/components/on-this-page";
import ThemeGenerator from "@/components/misc/theme-generator";

const Docs = () => {
  return (
    <main mui-page="docs">
      <Controls />
      <Preview />
      <OnThisPage />
      <ThemeGenerator />
    </main>
  );
};

export default Docs;
