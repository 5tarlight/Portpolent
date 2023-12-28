import { ReactElement } from "react";

export default function HeaderItemContainer({
  children,
}: {
  children: ReactElement | string | number;
}) {
  return <div className="h-full flex flex-col justify-center">{children}</div>;
}
