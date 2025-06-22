import type { JSX } from "react";

const InvokeComponent = (element: () => JSX.Element) => {
  const Component = element;

  return <Component />;
};

export default InvokeComponent;
