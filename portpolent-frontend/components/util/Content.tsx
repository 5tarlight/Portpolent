import { ReactNode } from "react";

export default function Content({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "max-w-[1320px] px-[20px] w-full justify-self-center " + className
      }
    >
      {children}
    </div>
  );
}
