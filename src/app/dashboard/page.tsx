import { Heading, PageLayout, SearchField } from "@/components";
import { type Metadata } from "next";
import { ProjectStats } from "./project-stats/ProjectStats";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <PageLayout className="flex flex-2 flex-col gap-4">
        <div className="flex flex-row-reverse justify-between">
          <SearchField placeholder="Search something..." />
          <Heading>Dashboard</Heading>
        </div>
        <div className="flex gap-4">
          <div className="col-span-1">
            <ProjectStats />
          </div>
          <div className="col-span-1 w-full bg-amber-300">2</div>
        </div>
      </PageLayout>
      {false && (
        <div className="bg-purple-100 h-screen p-5 flex flex-1 flex-col justify-center items-center">
          CHAT
        </div>
      )}
    </div>
  );
}
