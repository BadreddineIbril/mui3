import BadgeDemo from "@/components/examples/badge-demo";
import NavigationBarDemo from "@/components/examples/bar-demo";
import ButtonDemo from "@/components/examples/button-demo";
import ButtonGroupDemo from "@/components/examples/button-group-demo";
import CardDemo from "@/components/examples/card-demo";
import CheckboxDemo from "@/components/examples/checkbox-demo";
import ChipsDemo from "@/components/examples/chips.demo";
import DialogDemo from "@/components/examples/dialog-demo";
import DividerDemo from "@/components/examples/divider-demo";
import FabDemo from "@/components/examples/fab-demo";
import IconButtonDemo from "@/components/examples/icon-button-demo";
import ListDemo from "@/components/examples/list-demo";
import RadioDemo from "@/components/examples/radio-demo";
import NavigationRailDemo from "@/components/examples/rail-demo";
import SelectDemo from "@/components/examples/select-demo";
import SideSheetDemo from "@/components/examples/side-sheet-demo";
import SliderDemo from "@/components/examples/slider-demo";
import SnackbarDemo from "@/components/examples/snackbar-demo";
import SplitButtonDemo from "@/components/examples/split-button-demo";
import TabsDemo from "@/components/examples/tabs-demo";
import TextFieldDemo from "@/components/examples/text-field-demo";
import ToolbarDemo from "@/components/examples/toolbar-demo";
import TooltipDemo from "@/components/examples/tooltip-demo";

const COMPONENTS_GROUP = [
  {
    group: { id: "form", label: "Form" },
    components: [
      {
        id: "button",
        label: "Button",
        demo: ButtonDemo,
      },
      {
        id: "icon-button",
        label: "Icon Button",
        demo: IconButtonDemo,
      },
      {
        id: "split-button",
        label: "Split Button",
        demo: SplitButtonDemo,
      },
      {
        id: "fab",
        label: "Fab",
        demo: FabDemo,
      },
      {
        id: "button-group",
        label: "Button Group",
        demo: ButtonGroupDemo,
      },
      {
        id: "checkbox",
        label: "Checkbox",
        demo: CheckboxDemo,
      },
      {
        id: "radio",
        label: "Radio",
        demo: RadioDemo,
      },
      {
        id: "slider",
        label: "Slider",
        demo: SliderDemo,
      },
      {
        id: "select",
        label: "Select",
        demo: SelectDemo,
      },
      {
        id: "chips",
        label: "Chips",
        demo: ChipsDemo,
      },
      {
        id: "text-field",
        label: "Text Field",
        demo: TextFieldDemo,
      },
    ],
  },
  {
    group: { id: "navigation", label: "Navigation" },
    components: [
      {
        id: "navigation-bar",
        label: "Navigation Bar",
        demo: NavigationBarDemo,
      },
      {
        id: "navigation-rail",
        label: "Navigation Rail",
        demo: NavigationRailDemo,
      },
      {
        id: "tabs",
        label: "Tabs",
        demo: TabsDemo,
      },
      {
        id: "list",
        label: "List",
        demo: ListDemo,
      },
      {
        id: "toolbar",
        label: "Toolbar",
        demo: ToolbarDemo,
      },
    ],
  },
  {
    group: { id: "modals", label: "Modals" },
    components: [
      {
        id: "side-sheet",
        label: "Side Sheet",
        demo: SideSheetDemo,
      },
      {
        id: "dialog",
        label: "Dialog",
        demo: DialogDemo,
      },
    ],
  },
  {
    group: { id: "feedback", label: "Feedback" },
    components: [
      {
        id: "snackbar",
        label: "Snackbar",
        demo: SnackbarDemo,
      },
      {
        id: "tooltip",
        label: "Tooltip",
        demo: TooltipDemo,
      },
    ],
  },
  {
    group: { id: "layout", label: "Layout" },
    components: [
      {
        id: "badge",
        label: "Badge",
        demo: BadgeDemo,
      },

      {
        id: "Card",
        label: "Card",
        demo: CardDemo,
      },

      {
        id: "divider",
        label: "Divider",
        demo: DividerDemo,
      },
    ],
  },
];

export default COMPONENTS_GROUP;
