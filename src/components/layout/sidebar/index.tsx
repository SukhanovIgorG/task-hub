"use client";

import { SidebarHeading } from "./SidebarHeading";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarProjects } from "./SidebarProjects";
import { SidebarProfile } from "./SidebarProfile";
import { ThemeToggle } from "./theme-toggle";

export function Sidebar() {
  return (
    <aside
      className="
      p-5 h-screen bg-bg-main relative
      dark:bg-neutral-800 dark:text-white"
    >
      <nav>
        <SidebarHeading title="Account" />
        <SidebarProfile />
        <SidebarHeading title="MainMenu" />
        <SidebarMenu />
        <SidebarHeading title="Projects" />
        <SidebarProjects />
      </nav>
      <ThemeToggle style={{ position: "absolute", bottom: 20, right: 20 }} />
    </aside>
  );
}
