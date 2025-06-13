import { useParams } from "react-router-dom";
import COMPONENTS_GROUP from "@/data/components";

const Preview = () => {
  const { id } = useParams();

  const DemoComponent =
    COMPONENTS_GROUP.flatMap((group) => group.components).find(
      (comp) => comp.id === id
    )?.demo ||
    COMPONENTS_GROUP.flatMap((group) => group.components).find(
      (comp) => comp.id === "button"
    )?.demo;

  return (
    <section data-preview>{DemoComponent ? <DemoComponent /> : "404"}</section>
  );
};

export default Preview;
