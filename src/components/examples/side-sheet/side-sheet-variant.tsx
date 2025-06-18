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

const SideSheetVariant = () => {
  const variants: Array<"standard" | "modal"> = ["standard", "modal"];

  return (
    <div className="demo">
      {variants.map((variant) => (
        <SideSheet key={variant} variant={variant}>
          <SideSheetTrigger>
            <Button variant="outlined">Click to open ({variant})</Button>
          </SideSheetTrigger>
          <SideSheetContent>
            <SideSheetHeader
              headline="Title"
              close={variant === "modal"}
              back={variant === "standard"}
            />
            <SideSheetBody>My content</SideSheetBody>
            <SideSheetFooter
              style={{ display: "flex", gap: "12px" }}
              showDivider>
              <Button rounded>Save</Button>
              <SideSheetClose>
                <Button variant="outlined" rounded>
                  Cancel
                </Button>
              </SideSheetClose>
            </SideSheetFooter>
          </SideSheetContent>
        </SideSheet>
      ))}
    </div>
  );
};

export default SideSheetVariant;
