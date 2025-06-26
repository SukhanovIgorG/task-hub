import { Pages } from "@/config/pages";
import type { IMenu } from "@/types/menu.types";
import {
  CalendarIcon,
  LayoutGrid,
  MessageCircleIcon,
  SettingsIcon,
} from "lucide-react";

export const MAIN_MENU: IMenu[] = [
  {
    label: "Dashboard",
    href: Pages.DASHBOARD,
    icon: LayoutGrid,
  },
  {
    label: "Messages",
    href: Pages.MESSAGES,
    icon: MessageCircleIcon,
  },
  {
    label: "Insight",
    href: Pages.INSIGHT,
    icon: LayoutGrid,
  },
  {
    label: "Team",
    href: Pages.TEAM,
    icon: LayoutGrid,
  },
  {
    label: "Schedule",
    href: Pages.SCHEDULE,
    icon: CalendarIcon,
  },
  {
    label: "Report",
    href: Pages.REPORT,
    icon: LayoutGrid,
  },
  {
    label: "Settings",
    href: Pages.SETTINGS,
    icon: SettingsIcon,
  },
];
