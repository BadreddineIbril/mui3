import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";

const Hero = () => (
  <section className="hero-area">
    <div className="content">
      <div className="title">
        <div className="tag">
          Soon...
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <p className="subtitle">
        Soon, this space will showcase UI examples built with MUI3. Use them as
        a visual reference or inspiration while the design system continues to
        grow.
      </p>
    </div>
    <div className="actions">
      <Button size="md" rounded href="/docs/components">
        Browse components <Icon name="arrow_forward" />
      </Button>
    </div>
  </section>
);

export default Hero;
