"use client";

import { ReactNode, useState } from "react";

const FeatureContainer = ({ children }: { children?: ReactNode }) => {
  const shadowStyle = `0.2px 0.3px 2.2px rgba(0, 0, 0, 0.02),
  0.6px 0.8px 5.3px rgba(0, 0, 0, 0.028),
  1.1px 1.5px 10px rgba(0, 0, 0, 0.035),
  2px 2.7px 17.9px rgba(0, 0, 0, 0.042),
  3.8px 5px 33.4px rgba(0, 0, 0, 0.05),
  9px 12px 80px rgba(0, 0, 0, 0.07)`;

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="bg-white size-60 rounded-md flex justify-center items-center content-center"
      style={{ boxShadow: shadowStyle }}
      onMouseEnter={() => setIsHover(true)}
    >
      {children}
    </div>
  );
};

export default FeatureContainer;
