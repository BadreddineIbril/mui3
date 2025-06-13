import { useState } from "react";
import Snackbar from "@/components/ui/snackbar";
import Button from "@/components/ui/button";

const SnackbarDemo = () => {
  const [snackbar, setSnackbar] = useState({
    "top-start": false,
    "top-center": false,
    "top-end": false,
    "bottom-start": false,
    "bottom-center": false,
    "bottom-end": false,
  });

  return (
    <div className="demo">
      {Object.entries(snackbar).map((position, i) => (
        <Button
          key={i}
          variant="outlined"
          onClick={() =>
            setSnackbar((prev) => ({ ...prev, [position[0]]: true }))
          }>
          {position[0].replace("-", " ").toUpperCase()}
        </Button>
      ))}

      {Object.entries(snackbar).map((position, i) => (
        <Snackbar
          key={i}
          position={position[0]}
          open={snackbar[position[0]]}
          close
          onClose={() =>
            setSnackbar((prev) => ({ ...prev, [position[0]]: false }))
          }
          message="Snackbar supporting text"
        />
      ))}
    </div>
  );
};

export default SnackbarDemo;
