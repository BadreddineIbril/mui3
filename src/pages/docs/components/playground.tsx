import { useParams } from "react-router-dom";
import type { ComponentIdDefinition } from "@/types/demo";
import { paginatedComponents } from "@/util/helpers";
import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";
import Footer from "@/components/layout/footer";
import GetStartedPlayground from "@/pages/docs/components/playground/pg.get-started";
import ComponentsPlayground from "@/pages/docs/components/playground/pg.components";

const Playground = () => {
  const { component } = useParams();

  const { previous, next } = paginatedComponents(
    component as ComponentIdDefinition
  );

  return (
    <section className="playground-area">
      {component ? <ComponentsPlayground /> : <GetStartedPlayground />}
      <div className="playground-actions">
        {previous && (
          <Button
            variant="text"
            href={`/docs/components/${previous.id}`}
            aria-label="previous">
            <Icon name="arrow_left_alt" />
            {previous.label}
          </Button>
        )}
        {next && (
          <Button
            variant="text"
            href={`/docs/components/${next.id}`}
            aria-label="next">
            {next.label}
            <Icon name="arrow_right_alt" />
          </Button>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Playground;
