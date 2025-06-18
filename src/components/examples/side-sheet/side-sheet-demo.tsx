import Button from "@/components/ui/button";
import {
  SideSheet,
  SideSheetBody,
  SideSheetClose,
  SideSheetContent,
  SideSheetFooter,
  SideSheetHeader,
  SideSheetTrigger,
} from "@/components/ui/side-sheet";

const SideSheetDemo = () => {
  return (
    <div className="demo">
      <SideSheet>
        <SideSheetTrigger>
          <Button variant="outlined">Click to open</Button>
        </SideSheetTrigger>
        <SideSheetContent>
          <SideSheetHeader headline="Title" back />
          <SideSheetBody>My content</SideSheetBody>
          <SideSheetFooter style={{ display: "flex", gap: "12px" }} showDivider>
            <Button rounded>Save</Button>
            <SideSheetClose>
              <Button variant="outlined" rounded>
                Cancel
              </Button>
            </SideSheetClose>
          </SideSheetFooter>
        </SideSheetContent>
      </SideSheet>
    </div>
  );
};

export default SideSheetDemo;
