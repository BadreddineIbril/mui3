import { useState } from "react";
import Button from "@/components/ui/button";
import Snackbar from "@/components/ui/snackbar";

type SnackbarPosition =
  | "top-start"
  | "top-center"
  | "top-end"
  | "bottom-start"
  | "bottom-center"
  | "bottom-end";

const SnackbarPosition = () => {
  const [snackbar, setSnackbar] = useState<{
    [key in SnackbarPosition]: boolean;
  }>({
    "top-start": false,
    "top-center": false,
    "top-end": false,
    "bottom-start": false,
    "bottom-center": false,
    "bottom-end": false,
  });

  return (
    <div className="demo wrap">
      {Object.entries(snackbar).map(([position]) => (
        <Button
          key={position}
          variant="outlined"
          onClick={() =>
            setSnackbar((prev) => ({ ...prev, [position]: true }))
          }>
          {position.replace("-", " ")}
        </Button>
      ))}
      {Object.entries(snackbar).map(([position, state], i) => (
        <Snackbar
          key={i}
          position={position as SnackbarPosition}
          open={state}
          close
          onClose={() =>
            setSnackbar((prev) => ({ ...prev, [position]: false }))
          }
          message="Snackbar supporting text"
        />
      ))}
    </div>
  );
};

export default SnackbarPosition;
