import { useEffect, useRef } from "react";
import Checkbox from "@/components/ui/checkbox";

const CheckboxIndeterminate = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = true;
  }, []);

  return (
    <div className="demo">
      <Checkbox ref={ref} />
    </div>
  );
};

export default CheckboxIndeterminate;
