import Link from "next/link";
import { MAIN_MENU } from "./data/main-menu.data";
import { PROJECTS } from "./data/projects-menu.data";

export function Sidebar() {
  return (
    <nav className="w-64 bg-gray-100 p-4 h-screen">
      <ul className="flex flex-col gap-2">
        {MAIN_MENU.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <Link href={`/projects/${item.label}`}>
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            Dashboard
          </Link>
        </li>
        {
          PROJECTS.map((project) => (
            <li key={project.name} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${project.color}`} />
              <Link href={`/projects/${project.name}`}>
                {project.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}