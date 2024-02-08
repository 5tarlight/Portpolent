import { ReactNode } from "react";
import Content from "./Content";
import { cn } from "@/lib/util/classname";

const DoubleContent = ({
  children,
  reversed = false,
}: {
  children: [ReactNode, ReactNode];
  reversed?: boolean;
}) => {
  return (
    <Content>
      <div
        className={cn([
          "flex w-full md:justify-between gap-4",
          {
            "lg:flex-row flex-col": !reversed,
            "lg:flex-row-reverse flex-col": reversed,
          },
        ])}
      >
        <div className="lg:w-[45%] break-word">{children[0]}</div>
        <div className="lg:w-[45%] break-word">{children[1]}</div>
      </div>
    </Content>
  );
};

export default DoubleContent;
