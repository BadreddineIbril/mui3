import Button from "@/components/ui/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogHeadline,
  DialogSupporting,
  DialogTrigger,
} from "@/components/ui/dialog";

const DialogDemo = () => {
  return (
    <div className="demo">
      <Dialog>
        <DialogTrigger>
          <Button variant="outlined">Click to open</Button>
        </DialogTrigger>
        <DialogContent style={{ width: "300px" }}>
          <DialogHeader showDivider>
            <DialogHeadline>Dialog title</DialogHeadline>
            <DialogSupporting>
              This is a standard alert dialog. Alert dialogs interrupt users
              with urgent information, details, or actions.
            </DialogSupporting>
          </DialogHeader>
          <DialogBody style={{ display: "flex", gap: "10px" }}>
            <DialogClose>
              <Button variant="text">Cancel</Button>
            </DialogClose>
            <Button variant="text">Done</Button>
          </DialogBody>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogDemo;
