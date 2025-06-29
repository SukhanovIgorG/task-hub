import { Heading, PageLayout, SearchField } from "@/components";
import { type Metadata } from "next";
import { ProjectStats } from "./project-stats/ProjectStats";
import { ProjectChart } from "./project-chart/ProjectChart";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <PageLayout className="flex flex-2 flex-col gap-4">
        <div className="flex flex-row-reverse justify-between">
          <div className="flex items-center gap-2">
            <SearchField placeholder="Search something..." />
            <button
              type="button"
              className="p-2 rounded-full bg-white hover:bg-gray-100 hover:text-primary transition-colors"
            >
              <MessageSquare />
            </button>
          </div>
          <Heading>Dashboard</Heading>
        </div>
        <div className="flex gap-4">
          <div className="col-span-1">
            <ProjectStats />
          </div>
          <div
            className="
            col-span-1 w-full max-w-[600px] flex-1
            rounded-lg bg-bg-main p-4"
          >
            <ProjectChart />
          </div>
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
