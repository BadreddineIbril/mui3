import { useState } from "react";
import { copy } from "@/util/helpers";
import Fab from "@/components/ui/fab";
import Icon from "@/components/misc/icon";
import Snackbar from "@/components/ui/snackbar";

const Copy = ({ content }: { content: string }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  function onCopy() {
    copy(content);
    setIsCopied(true);

    const timer = setTimeout(() => setIsCopied(false), 3000);
    return () => clearTimeout(timer);
  }

  return (
    <>
      <Fab
        className="copy"
        variant="soft-secondary"
        onClick={onCopy}
        data-copied={isCopied}>
        <Icon name={isCopied ? "check" : "content_copy"} />
      </Fab>
      <Snackbar
        open={isCopied}
        message="Component copied!"
        close
        onClose={() => setIsCopied(false)}
      />
    </>
  );
};

export default Copy;
