import { ReactElement } from "react";

export default function Content({
  children,
}: {
  children: ReactElement | number | string;
}) {
  return <div className="max-w-[1280px] w-full">{children}</div>;
}
