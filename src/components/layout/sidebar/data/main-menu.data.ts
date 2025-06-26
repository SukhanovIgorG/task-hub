import { Pages } from "@/config/pages";
import type { IMenu } from "@/types/menu.types";
import { LayoutGrid, MessageCircleIcon } from "lucide-react";

export const MAIN_MENU: IMenu[] = [
  {
    label: "Dashboard",
    href: Pages.DASHBOARD,
    icon: LayoutGrid,
  },
  {
    label: "Messages",
    href: Pages.MESSAGES,
    icon: MessageCircleIcon
  }
];