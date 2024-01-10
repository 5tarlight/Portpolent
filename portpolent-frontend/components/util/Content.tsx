import { ReactNode } from "react";

export default function Content({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={"max-w-[1280px] w-full justify-self-center " + className}>
      {children}
    </div>
  );
}
