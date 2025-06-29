import type { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
