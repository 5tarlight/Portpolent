"use client";

import { useState } from "react";
import TestItem from "./TestItem";
import TestTitle from "./TestTitle";
import { BackendResponse, httpGet } from "@/lib/backend";

const FetchTest = () => {
  const [resData, setResData] = useState<string>();
  const fetchData = async () => {
    const res = await httpGet<BackendResponse<string>>("/api/hello/");
    setResData(JSON.stringify(res));
  };

  return (
    <>
      <TestItem>
        <TestTitle>Test Backend Get</TestTitle>
        <button onClick={fetchData}>Fire</button>
        <div>{resData}</div>
      </TestItem>
    </>
  );
};

export default FetchTest;
