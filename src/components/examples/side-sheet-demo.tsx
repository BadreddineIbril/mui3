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
      {["standard", "modal"].map((type, i) => (
        <SideSheet variant={type} key={i}>
          <SideSheetTrigger>
            <Button variant="outlined">Open Sheet ({type})</Button>
          </SideSheetTrigger>
          <SideSheetContent>
            <SideSheetHeader headline="Title" back={i === 0} close={i !== 0} />
            <SideSheetBody>Hola Mola</SideSheetBody>
            <SideSheetFooter
              style={{ display: "flex", gap: "12px" }}
              showDivider>
              <Button rounded>Save</Button>
              <SideSheetClose>
                <Button variant="outlined" rounded>Cancel</Button>
              </SideSheetClose>
            </SideSheetFooter>
          </SideSheetContent>
        </SideSheet>
      ))}
    </div>
  );
};

export default SideSheetDemo;
