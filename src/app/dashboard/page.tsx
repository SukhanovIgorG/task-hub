import { Heading, SearchField } from "@/components";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};

export default function Dashboard() {
  return (
    <div>
      <div className="flex flex-row-reverse justify-between">
        <SearchField placeholder="Search something..." />
        <Heading>Dashboard Page</Heading>
      </div>
    </div>
  );
}
