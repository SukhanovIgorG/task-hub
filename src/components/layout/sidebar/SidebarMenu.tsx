import Link from "next/link";
import { MAIN_MENU } from "./data/main-menu.data";
import { SidebarHeading } from "./SidebarHeading";

export const SidebarMenu = () => {
  return (
    <div>
      <SidebarHeading title="MainMenu" />
      <div className="mb-8 space-y-2">
        {MAIN_MENU.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3">
              <item.icon size={16} className="opacity-60" />
              <span
                key={item.label}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Link href={item.href}>{item.label}</Link>
              </span>
            </div>
            {item.label === "Messages" && (
              <span
                className="
            flex items-center justify-center w-5 h-5 bg-primary rounded-lg
            text-white text-xs font-medium"
              >
                4
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
