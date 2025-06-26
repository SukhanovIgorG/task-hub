import { Sidebar } from "@/components";
import type { PropsWithChildren } from "react";

export default function DashboardLayout({
  children,
}: PropsWithChildren) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}