import { PROJECT_STATS } from "../data/project-stats.data";
import { ProjectStatsCard } from "./ProjectStatsCard";

export const ProjectStats = () => {
  return (
    <div className="flex flex-col gap-4">
      {PROJECT_STATS.map((item) => (
        <ProjectStatsCard key={item.id} item={item} />
      ))}
    </div>
  );
};
