import { Pages } from "@/config/pages";
import type { IMenu } from "@/types/menu.types";
import {
  CalendarIcon,
  ChartAreaIcon,
  LayoutGrid,
  MessageCircleIcon,
  MessageSquareIcon,
  SettingsIcon,
  UserIcon,
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
    icon: ChartAreaIcon,
  },
  {
    label: "Team",
    href: Pages.TEAM,
    icon: UserIcon,
  },
  {
    label: "Schedule",
    href: Pages.SCHEDULE,
    icon: CalendarIcon,
  },
  {
    label: "Report",
    href: Pages.REPORT,
    icon: MessageSquareIcon,
  },
  {
    label: "Settings",
    href: Pages.SETTINGS,
    icon: SettingsIcon,
  },
];
