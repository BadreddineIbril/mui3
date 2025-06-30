import type { CSSProperties } from "react";

const Typography = () => {
  const VARIANTS = [
    { id: "display-lg", label: "Display Large" },
    { id: "display-md", label: "Display Medium" },
    { id: "display-sm", label: "Display Small" },
    { id: "headline-lg", label: "Headline Large" },
    { id: "headline-md", label: "Headline Medium" },
    { id: "headline-sm", label: "Headline Small" },
    { id: "title-lg", label: "Title Large" },
    { id: "title-md", label: "Display Medium" },
    { id: "title-sm", label: "Title Small" },
    { id: "body-lg", label: "Body Large" },
    { id: "body-md", label: "Body Medium" },
    { id: "body-sm", label: "Body Small" },
    { id: "label-lg", label: "Label Large" },
    { id: "label-md", label: "Label Medium" },
    { id: "label-sm", label: "Label Small" },
  ];

  return (
    <div mui-get-started="typography">
      {VARIANTS.map((variant) => (
        <div
          key={variant.id}
          id={variant.id}
          className="variant"
          style={
            { "--variant-font": `var(--font-${variant.id})` } as CSSProperties
          }>
          <div className="type">{variant.label}</div>
          <div className="preview">
            Whereas recognition of the inherent dignity
          </div>
        </div>
      ))}
    </div>
  );
};

export default Typography;
