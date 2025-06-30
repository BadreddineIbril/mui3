import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";

const Hero = () => (
  <section className="hero-area">
    <div className="content">
      <div className="title">
        <div className="tag">
          404
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <p className="subtitle">This page could not be found</p>
    </div>
    <div className="actions">
      <Button size="md" rounded href="/">
        <Icon name="arrow_back" /> Back to home
      </Button>
    </div>
  </section>
);

export default Hero;
