"use client";

import { useState } from "react";
import TestItem from "./TestItem";
import TestTitle from "./TestTitle";
import { BackendResponse, backend, httpGet, httpPost } from "@/lib/backend";

const CsrFetchTest = () => {
  const [getRes, setGetRes] = useState<string>();
  const [postRes, setPostRes] = useState<string>();

  const getData = async () => {
    const res = await httpGet<BackendResponse<string>>(
      backend("/hello/", false),
      {
        cache: "no-store",
      }
    );

    setGetRes(JSON.stringify(res));
  };

  const postData = async () => {
    const res = await httpPost<BackendResponse<string>>(
      backend("/hello", false),
      {},
      {
        cache: "no-store",
      }
    );

    setPostRes(JSON.stringify(res));
  };

  return (
    <>
      <TestItem>
        <TestTitle>Test Backend Get</TestTitle>
        <button onClick={getData}>Fire</button>
        <div>{getRes || "no data"}</div>
      </TestItem>

      <TestItem>
        <TestTitle>Test Backend Post</TestTitle>
        <button onClick={postData}>Fire</button>
        <div>{postRes || "no data"}</div>
      </TestItem>
    </>
  );
};

export default CsrFetchTest;
