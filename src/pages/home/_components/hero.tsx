import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-area">
      <div className="content">
        <div className="title">
          Material{" "}
          <div className="tag">
            UI 3 <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <p className="subtitle">
          An open source, lightweight collection of accessible Material Design 3
          components. Built with React. Styled using pure CSS.
        </p>
      </div>
      <div className="actions">
        <Button size="md" rounded href="/docs">
          Get Started <Icon name="arrow_forward" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
