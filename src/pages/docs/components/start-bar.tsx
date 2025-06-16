import Button from "@/components/ui/button";

const StartBar = () => {
  const GET_STARTED_LINKS = [
    { label: "Introduction", href: "#" },
    { label: "Installation", href: "#" },
    { label: "Theming", href: "#" },
    { label: "Dark Mode", href: "#" },
    { label: "Changelog", href: "#" },
  ];

  const COMPONENT_LINKS = [
    { label: "Button", href: "#" },
    { label: "Icon Button", href: "#" },
    { label: "Fab", href: "#" },
    { label: "Split Button", href: "#" },
    { label: "Button Group", href: "#" },
    { label: "Checkbox", href: "#" },
    { label: "Radio", href: "#" },
    { label: "Slider", href: "#" },
    { label: "Select", href: "#" },
    { label: "Chips", href: "#" },
    { label: "Text Field", href: "#" },
  ];

  return (
    <aside className="start-bar">
      <div className="general-box">
        <div className="info">
          <h2 className="title">Button</h2>
          <p className="description">
            Displays a button or a component that looks like a button.
          </p>
        </div>
      </div>
      <div className="links-box">
        <div className="get-started">
          <h3 className="title">Get started</h3>
          <ul>
            {GET_STARTED_LINKS.map((link) => (
              <li key={link.label}>
                <Button variant="text" rounded>
                  {link.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="components">
          <h3 className="title">Components</h3>
          <ul>
            {COMPONENT_LINKS.map((link) => (
              <li key={link.label}>
                <Button
                  variant={link.label === "Button" ? "filled" : "text"}
                  rounded>
                  {link.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default StartBar;
