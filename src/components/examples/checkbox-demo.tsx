import { useEffect, useRef } from "react";
import Checkbox from "@/components/ui/checkbox";

const CheckboxDemo = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = true;
    }
  }, []);

  return (
    <div className="demo">
      <Checkbox defaultChecked />
      <Checkbox />
      <Checkbox ref={ref} />
      <Checkbox defaultChecked disabled />
      <Checkbox disabled />
    </div>
  );
};

export default CheckboxDemo;
