import type { IProjectStats } from "./project-stats.types";

export const ProjectStatsCard = ({ item }: { item: IProjectStats }) => {
  return (
    <div
      className={`${item.bgColor} rounded-lg p-4 flex justify-between min-w-[200px]`}
    >
      <div className="flex flex-col ">
        <span className="text-2xl font-semibold">{item.value}</span>
        <span className="text-xs">{item.label}</span>
      </div>
      <item.icon size={50} className="opacity-60" />
    </div>
  );
};
