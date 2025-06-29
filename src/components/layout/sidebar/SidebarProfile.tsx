import { ChevronDown } from "lucide-react";
import { PROFILE } from "./data/profile-menu-data";
import { SidebarHeading } from "./SidebarHeading";

export const SidebarProfile = () => {
  return (
    <div className="p-5">
      <SidebarHeading title="Account" />
      <div
        className="
      bg-neutral-100 p-2 rounded-full
      flex items-center gap-2.5 justify-between
      hover:bg-neutral-200 hover:cursor-pointer
      dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-white
      "
      >
        <div className="w-8 h-8 min-w-[32px] bg-primary rounded-full" />
        <div className="leading-snug overflow-hidden">
          <div className="font-medium text-ellipsis overflow-hidden">
            {PROFILE.name}
          </div>
          <div className="opacity-60 text-sm text-ellipsis overflow-hidden">
            {PROFILE.email}
          </div>
        </div>
        <div className="ml-1">
          <ChevronDown size={16} className="opacity-60" />
        </div>
      </div>
    </div>
  );
};
