import { useState } from "react";
import Button from "@/components/ui/button";
import Snackbar from "@/components/ui/snackbar";

const SnackbarAction = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="demo">
      <Button onClick={() => setIsOpen(true)}>Click to open</Button>
      <Snackbar
        open={isOpen}
        onClose={() => setIsOpen(false)}
        message="Email achieved"
        close
        action={{ label: "Action", onClick: () => setIsOpen(false) }}
      />
    </div>
  );
};

export default SnackbarAction;
