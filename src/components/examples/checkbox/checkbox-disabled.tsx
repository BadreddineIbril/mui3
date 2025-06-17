import { useEffect, useRef } from "react";
import Checkbox from "@/components/ui/checkbox";

const CheckboxDisabled = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = true;
  }, []);
  return (
    <div className="demo">
      <Checkbox defaultChecked disabled />
      <Checkbox ref={ref} disabled />
      <Checkbox disabled />
    </div>
  );
};

export default CheckboxDisabled;
