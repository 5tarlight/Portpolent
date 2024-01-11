import { ReactNode } from "react";

const FooterGroup = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-40 flex flex-col">
      <div className="bg-white w-full h-2 mb-4" />
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};

export default FooterGroup;
