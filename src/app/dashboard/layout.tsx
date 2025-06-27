import { Sidebar } from "@/components";
import type { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
