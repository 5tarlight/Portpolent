import { ReactNode } from "react";

const TestTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className="font-bold text-2xl mb-4">{children}</h2>;
};

export default TestTitle;
