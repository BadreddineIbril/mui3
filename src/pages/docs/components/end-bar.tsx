import Button from "@/components/ui/button";

const EndBar = () => {
  return (
    <aside className="end-bar">
      <div className="guide-box">
        <h3 className="title">On this page</h3>
        <div className="actions-list">
          <div className="steps">
            {[...Array(3)].map((_, i) => (
              <span key={i} />
            ))}
          </div>
          <div className="actions">
            <Button rounded>Overview</Button>
            <Button variant="text" rounded>
              Installation
            </Button>
            <Button variant="text" rounded>
              Examples
            </Button>
            <Button variant="text" rounded>
              API Reference
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default EndBar;
