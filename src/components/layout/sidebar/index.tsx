import { SidebarHeading } from "./SidebarHeading";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarProjects } from "./SidebarProjects";
import { SidebarProfile } from "./SidebarProfile";

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-5 h-screen">
      <nav>
        <SidebarHeading title="Account" />
        <SidebarProfile />
        <SidebarHeading title="MainMenu" />
        <SidebarMenu />
        <SidebarHeading title="Projects" />
        <SidebarProjects />
      </nav>
    </aside>
  );
}
