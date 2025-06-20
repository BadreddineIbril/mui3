import Button from "@/components/ui/button";

const OnThisPage = () => {
  return (
    <aside className="on-this-page-area">
      <div className="guide-box">
        <h3 className="title">On this page</h3>
        <div className="actions-list">
          <div className="steps">
            {[...Array(3)].map((_, i) => (
              <span key={i} />
            ))}
          </div>
          <div className="actions">
            <Button>Overview</Button>
            <Button variant="text">Installation</Button>
            <Button variant="text">Examples</Button>
            <Button variant="text">API Reference</Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default OnThisPage;
