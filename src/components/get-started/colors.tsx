import type { CSSProperties } from "react";
import Shape, { type ShapeVariant } from "@/components/misc/shape";

const Colors = () => {
  const COLORS = [
    {
      id: "primary",
      label: "Primary",
      symbol: "oval",
      description:
        "Use primary roles for the most prominent components across the UI, such as the FAB, high-emphasis buttons, and active states.",
      scheme: [
        { id: "primary", text: "on-primary", name: "Primary" },
        { id: "on-primary", text: "primary", name: "On Primary" },
        {
          id: "primary-container",
          text: "on-primary-container",
          name: "Primary Container",
        },
        {
          id: "on-primary-container",
          text: "primary-container",
          name: "On Primary Container",
        },
      ],
    },
    {
      id: "secondary",
      label: "Secondary",
      symbol: "square",
      description:
        "Use secondary roles for less prominent components in the UI such as filter chips.",
      scheme: [
        { id: "secondary", text: "on-secondary", name: "Secondary" },
        { id: "on-secondary", text: "secondary", name: "On Secondary" },
        {
          id: "secondary-container",
          text: "on-secondary-container",
          name: "Secondary Container",
        },
        {
          id: "on-secondary-container",
          text: "secondary-container",
          name: "On Secondary Container",
        },
      ],
    },
    {
      id: "tertiary",
      label: "Tertiary",
      symbol: "circle",
      description:
        "Use tertiary roles for contrasting accents that balance primary and secondary colors or bring heightened attention to an element such as an input field.",
      scheme: [
        { id: "tertiary", text: "on-tertiary", name: "Tertiary" },
        { id: "on-tertiary", text: "tertiary", name: "On Tertiary" },
        {
          id: "tertiary-container",
          text: "on-tertiary-container",
          name: "Tertiary Container",
        },
        {
          id: "on-tertiary-container",
          text: "tertiary-container",
          name: "On Tertiary Container",
        },
      ],
    },
    {
      id: "error",
      label: "Error",
      symbol: "semicircle",
      description:
        "Use error roles to communicate error states, such as an incorrect password entered into a text field.",
      scheme: [
        { id: "error", text: "on-error", name: "Error" },
        { id: "on-error", text: "error", name: "On Error" },
        {
          id: "error-container",
          text: "on-error-container",
          name: "Error Container",
        },
        {
          id: "on-error-container",
          text: "error-container",
          name: "On Error Container",
        },
      ],
    },
    {
      id: "surface",
      label: "Surface",
      symbol: "fan",
      description:
        "Use surface roles for more neutral backgrounds, and container colors for components like cards, sheets, and dialogs.",
      scheme: [
        { id: "surface", text: "on-surface", name: "Surface" },
        { id: "on-surface", text: "surface", name: "On Surface" },
        {
          id: "surface-variant",
          text: "on-surface-variant",
          name: "Surface Variant",
        },
        {
          id: "on-surface-variant",
          text: "surface-variant",
          name: "On Surface Variant",
        },
        {
          id: "inverse-surface",
          text: "inverse-on-surface",
          name: "Inverse Surface",
        },
        {
          id: "inverse-on-surface",
          text: "inverse-surface",
          name: "Inverse On Surface",
        },
        {
          id: "surface-container-lowest",
          text: "on-surface",
          name: "Surface Container Lowest",
        },
        {
          id: "surface-container-low",
          text: "on-surface",
          name: "Surface Container Low",
        },
        {
          id: "surface-container-high",
          text: "on-surface",
          name: "Surface Container High",
        },
        {
          id: "surface-container-highest",
          text: "on-surface",
          name: "Surface Container Highest",
        },
        {
          id: "surface-container",
          text: "on-surface",
          name: "Surface Container",
        },
      ],
    },
    {
      id: "outline",
      label: "Outline",
      symbol: "arch",
      description:
        "Use Outline for key boundaries, like where a text box begins and ends. Outline Variant is for smaller, lighter touches like dividers, especially when other stuff on screen is already easy to read",
      scheme: [
        { id: "outline", text: "surface", name: "Outline" },
        {
          id: "outline-variant",
          text: "on-surface-variant",
          name: "Outline Variant",
        },
      ],
    },
    {
      id: "background",
      label: "Background",
      symbol: "diamond",
      scheme: [
        { id: "background", text: "on-background", name: "Background" },
        { id: "on-background", text: "background", name: "On Background" },
      ],
    },
  ];

  return (
    <div mui-get-started="colors">
      {COLORS.map((color) => (
        <div key={color.id} className="colors-box">
          <div className="heading">
            <h2 className="title">{color.label}</h2>
            <p className="description">{color.description}</p>
          </div>
          <div className="preview">
            {color.scheme.map((variant) => (
              <div
                className="variant"
                style={
                  {
                    "--variant-bg-color": `var(--color-${variant.id})`,
                    "--variant-text-color": `var(--color-${variant.text})`,
                  } as CSSProperties
                }>
                <div className="info">
                  <span>{variant.name}</span>
                  <Shape variant={color.symbol as ShapeVariant} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Colors;
