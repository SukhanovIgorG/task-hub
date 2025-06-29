"use client";

import { SidebarMenu } from "./SidebarMenu";
import { SidebarProjects } from "./SidebarProjects";
import { SidebarProfile } from "./SidebarProfile";
import { ThemeToggle } from "./theme-toggle";

export function Sidebar() {
  return (
    <aside>
      <nav
        className="flex flex-col gap-1
      h-screen bg-bg-main relative
      dark:bg-neutral-800 dark:text-white"
      >
        <SidebarProfile />
        <div className="flex-1 overflow-y-auto p-5">
          <SidebarMenu />
          <SidebarProjects />
        </div>
      </nav>
      <ThemeToggle style={{ position: "absolute", bottom: 20, right: 20 }} />
    </aside>
  );
}
