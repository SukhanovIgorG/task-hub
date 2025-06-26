import { ChevronDown } from "lucide-react";
import { PROFILE } from "./data/profile-menu-data";

export const SidebarProfile = () => {
  return (
    <div className="mb-8 flex items-center gap-2.5">
      <div className="w-8 h-8 bg-primary rounded-full" />
      <div className="leading-snug">
        <div className="font-medium">{PROFILE.name}</div>
        <div className="opacity-60 text-sm">{PROFILE.email}</div>
      </div>
      <div className="ml-1">
        <ChevronDown size={16} className="opacity-60" />
      </div>
    </div>
  );
};
