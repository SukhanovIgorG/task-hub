import Link from "next/link";
import { PROJECTS } from "./data/projects-menu.data";

export const SidebarProjects = () => {
  return (
    <>
      {PROJECTS.map((project) => (
        <div key={project.name} className="flex items-center gap-2">
          <div className={project.color} />
          <Link href={`/projects/${project.name}`}>{project.name}</Link>
        </div>
      ))}
    </>
  );
};
