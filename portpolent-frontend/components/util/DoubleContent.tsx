import { ReactNode } from "react";
import Content from "./Content";

const DoubleContent = ({
  children,
  reversed = false,
}: {
  children: [ReactNode, ReactNode];
  reversed?: boolean;
}) => {
  return (
    <Content>
      <div className="flex w-full justify-between">
        <div className="w-[45%] break-word">{children[0]}</div>
        <div className="w-[45%] break-word">{children[1]}</div>
      </div>
    </Content>
  );
};

export default DoubleContent;
