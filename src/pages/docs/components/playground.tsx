import { useParams } from "react-router-dom";
import type { GetStartedId } from "@/types/common";
import type { ComponentIdDefinition } from "@/types/demo";
import { paginatedComponents } from "@/util/helpers";
import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";
import Footer from "@/components/layout/footer";
import GetStartedPlayground from "@/pages/docs/components/playground/pg.get-started";
import ComponentsPlayground from "@/pages/docs/components/playground/pg.components";

const Playground = () => {
  const { section, component } = useParams();

  const { previous, next } = paginatedComponents(
    section as GetStartedId,
    component as ComponentIdDefinition
  );

  return (
    <section className="playground-area">
      {component ? <ComponentsPlayground /> : <GetStartedPlayground />}
      <div className="playground-actions">
        {previous && (
          <Button variant="text" href={previous.href} aria-label="previous">
            <Icon name="arrow_left_alt" />
            {previous.label}
          </Button>
        )}
        {next && (
          <Button variant="text" href={next.href} aria-label="next">
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
