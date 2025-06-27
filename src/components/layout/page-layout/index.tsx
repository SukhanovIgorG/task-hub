import clsx from "clsx";
import type { PropsWithChildren } from "react";

export const PageLayout = ({
  children,
  ...props
}: PropsWithChildren & { className?: string }) => {
  return <main className={clsx("p-4", props.className)}>{children}</main>;
};
