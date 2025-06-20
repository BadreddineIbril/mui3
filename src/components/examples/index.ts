import BADGE_DEMO from "@/components/examples/badge";
import BUTTON_DEMO from "@/components/examples/button";
import BUTTON_GROUP_DEMO from "@/components/examples/button-group";
import CARD_DEMO from "@/components/examples/card";
import CHECKBOX_DEMO from "@/components/examples/checkbox";
import CHIPS_DEMO from "@/components/examples/chips";
import DIALOG_DEMO from "@/components/examples/chips";
import DIVIDER_DEMO from "@/components/examples/divider";
import FAB_DEMO from "@/components/examples/fab";
import ICON_BUTTON_DEMO from "@/components/examples/icon-button";
import NAVIGATION_BAR_DEMO from "@/components/examples/navigation-bar";
import NAVIGATION_RAIL_DEMO from "@/components/examples/navigation-rail";
import RADIO_DEMO from "@/components/examples/radio";
import SIDE_SHEET_DEMO from "@/components/examples/side-sheet";
import SLIDER_DEMO from "@/components/examples/slider";
import SNACKBAR_DEMO from "@/components/examples/snackbar";
import SPLIT_BUTTON_DEMO from "@/components/examples/split-button";
import SWITCH_DEMO from "@/components/examples/switch";
import TABS_DEMO from "@/components/examples/tabs";
import TOOLBAR_DEMO from "@/components/examples/toolbar";
import TOOLTIP_DEMO from "@/components/examples/tooltip";
import type { ComponentGroupDefinition } from "@/types/common";

const COMPONENT_GROUPS: ComponentGroupDefinition[] = [
  {
    id: "form",
    label: "Form",
    components: [
      BUTTON_DEMO,
      ICON_BUTTON_DEMO,
      FAB_DEMO,
      BUTTON_GROUP_DEMO,
      SPLIT_BUTTON_DEMO,
      RADIO_DEMO,
      CHECKBOX_DEMO,
      SWITCH_DEMO,
      SLIDER_DEMO,
      CHIPS_DEMO,
    ],
  },
  {
    id: "navigation",
    label: "Navigation",
    components: [
      TABS_DEMO,
      TOOLBAR_DEMO,
      NAVIGATION_BAR_DEMO,
      NAVIGATION_RAIL_DEMO,
    ],
  },
  {
    id: "modals",
    label: "Modals",
    components: [SIDE_SHEET_DEMO, DIALOG_DEMO],
  },
  {
    id: "feedback",
    label: "Feedback",
    components: [SNACKBAR_DEMO, TOOLTIP_DEMO],
  },
  {
    id: "layout",
    label: "Layout",
    components: [BADGE_DEMO, CARD_DEMO, DIVIDER_DEMO],
  },
];

export default COMPONENT_GROUPS;
