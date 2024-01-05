import { ReactElement } from "react";

export default function Content({
  children,
}: {
  children: ReactElement | number | string;
}) {
  return (
    <div className="max-w-[1280px] w-full justify-self-center">{children}</div>
  );
}
