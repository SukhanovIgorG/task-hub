import Link from "next/link";
import { MAIN_MENU } from "./data/main-menu.data";

export const SidebarMenu = () => {
  return (
    <>
      {MAIN_MENU.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <item.icon size={16} className="opacity-60" />
          <div key={item.label} className="flex items-center gap-2">
            <Link href={`/projects/${item.label}`}>{item.label}</Link>
          </div>
        </div>
      ))}
    </>
  );
};
