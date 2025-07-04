import BADGE_DEMO from "@/components/examples/badge";
import BUTTON_DEMO from "@/components/examples/button";
import BUTTON_GROUP_DEMO from "@/components/examples/button-group";
import CARD_DEMO from "@/components/examples/card";
import CHECKBOX_DEMO from "@/components/examples/checkbox";
import CHIPS_DEMO from "@/components/examples/chips";
import DIALOG_DEMO from "@/components/examples/dialog";
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
import SELECT_DEMO from "@/components/examples/select";
import TEXT_FIELD_DEMO from "@/components/examples/text-field";
import LIST_DEMO from "@/components/examples/list";
import type { ComponentGroupDefinition } from "@/types/common";

const COMPONENT_GROUPS: ComponentGroupDefinition[] = [
  {
    id: "actions",
    label: "Actions",
    components: [
      BUTTON_DEMO,
      ICON_BUTTON_DEMO,
      FAB_DEMO,
      BUTTON_GROUP_DEMO,
      SPLIT_BUTTON_DEMO,
    ],
  },
  {
    id: "selection",
    label: "Selection",
    components: [
      RADIO_DEMO,
      CHECKBOX_DEMO,
      SWITCH_DEMO,
      SLIDER_DEMO,
      CHIPS_DEMO,
      SELECT_DEMO,
    ],
  },
  {
    id: "text-inputs",
    label: "Text Inputs",
    components: [TEXT_FIELD_DEMO],
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
    id: "containment",
    label: "Containment",
    components: [
      LIST_DEMO,
      DIALOG_DEMO,
      SIDE_SHEET_DEMO,
      CARD_DEMO,
      DIVIDER_DEMO,
    ],
  },
  {
    id: "communication",
    label: "Communication",
    components: [BADGE_DEMO, SNACKBAR_DEMO, TOOLTIP_DEMO],
  },
];

export default COMPONENT_GROUPS;
