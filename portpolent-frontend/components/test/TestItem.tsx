import { cn } from "@/lib/util/classname";
import { ReactNode } from "react";
import Content from "../util/Content";

const TestItem = ({
  children,
  className,
}: {
  children: [ReactNode, ReactNode, ReactNode];
  className?: string;
}) => {
  const gradient = `linear-gradient(45deg, rgba(255,232,232,1) 0%, rgba(255,241,225,1) 16%, rgba(253,255,215,1) 33%, rgba(223,255,223,1) 49%, rgba(226,234,255,1) 65%, rgba(235,225,255,1) 82%, rgba(255,237,251,1) 100%)`;
  const shadow = `0.4px 0.4px 2.2px rgba(0, 0, 0, 0.02),
    1.1px 1.1px 5.3px rgba(0, 0, 0, 0.028),
    2px 2px 10px rgba(0, 0, 0, 0.035),
    3.6px 3.6px 17.9px rgba(0, 0, 0, 0.042),
    6.7px 6.7px 33.4px rgba(0, 0, 0, 0.05),
    16px 16px 80px rgba(0, 0, 0, 0.07)`;

  return (
    <div className="w-full flex justify-center mt-16">
      <Content>
        <div
          style={{ background: gradient, boxShadow: shadow }}
          className={cn(["w-full rounded-lg p-8", className || ""])}
        >
          {children[0]}
          <div>
            <div className="text-lg font-bold">Test</div>
            {children[1]}
          </div>
          <div className="mt-4">
            <div className="text-lg font-bold">Response</div>
            {children[2]}
          </div>
        </div>
      </Content>
    </div>
  );
};

export default TestItem;
