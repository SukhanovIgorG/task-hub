import { CalendarIcon, Clock, ProjectorIcon } from "lucide-react";
import type { IProjectStats } from "../project-stats/project-stats.types";

export const PROJECT_STATS: IProjectStats[] = [
  {
    id: 1,
    value: 92,
    label: "Active Projects",
    bgColor: "bg-violet-300",
    icon: ProjectorIcon,
  },
  {
    id: 2,
    value: 35,
    label: "On going Projects",
    bgColor: "bg-yellow-300",
    icon: CalendarIcon,
  },
  {
    id: 3,
    value: 1149,
    label: "Working hours",
    bgColor: "bg-pink-300",
    icon: Clock,
  },
];
