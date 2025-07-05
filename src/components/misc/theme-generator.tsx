import { useState } from "react";
import Icon from "@/components/misc/icon";
import Fab from "@/components/ui/fab";
import Toolbar from "@/components/ui/toolbar";
import IconButton from "@/components/ui/icon-button";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { useTheme } from "@/contexts";
import { copy } from "@/util/helpers";
import type { HexColor } from "@/types/context";

const ThemeGenerator = () => {
  const { primary, scheme, setPrimary } = useTheme();
  const [color, setColor] = useState<HexColor>(primary);

  const [isCopied, setIsCopied] = useState<boolean>(false);

  function onCopy() {
    copy(scheme);
    setIsCopied(true);

    const timer = setTimeout(() => setIsCopied(false), 3000);
    return () => clearTimeout(timer);
  }

  return (
    <div className="theme-generator">
      <Toolbar variant="floating" type="vibrant">
        <input
          type="color"
          value={color}
          aria-label="theme color"
          onChange={(e) => setColor(e.currentTarget.value as HexColor)}
        />
        <div className="info">
          <span>Source color</span>
          <p>Seed color for dynamic</p>
        </div>
        <Tooltip>
          <IconButton onClick={onCopy} disabled={isCopied}>
            <Icon name={isCopied ? "check" : "content_copy"} />
          </IconButton>
          <TooltipContent>Copy Scheme</TooltipContent>
        </Tooltip>
      </Toolbar>
      <Fab
        variant="primary"
        onClick={() => setPrimary(color as HexColor)}
        disabled={primary === color}>
        <Icon name={primary === color ? "lock" : "check"} />
      </Fab>
    </div>
  );
};

export default ThemeGenerator;
