import Link from "next/link";
import { PROJECTS } from "./data/projects-menu.data";
import clsx from "clsx";
import { SidebarHeading } from "./SidebarHeading";

export const SidebarProjects = () => {
  return (
    <div>
      <SidebarHeading title="Projects" />
      <ul className="space-y-2 pl-4 mt-2.5">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="flex items-center gap-2 text-neutral-500 hover:text-primary"
          >
            <div className={clsx("w-2 h-2 rounded-full ", project.color)} />
            <Link href={`/projects/${project.name}`}>{project.name}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};
