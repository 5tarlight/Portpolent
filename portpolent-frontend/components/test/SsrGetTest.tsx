import { BackendResponse, backend, httpGet } from "@/lib/backend";
import TestItem from "./TestItem";
import TestTitle from "./TestTitle";

const getData = async () => {
  const res = await httpGet<BackendResponse<string>>(backend("/hello"), {
    cache: "no-store",
  });

  return JSON.stringify(res);
};

const SsrGetTest = async () => {
  const getRes = await getData();

  return (
    <TestItem>
      <TestTitle>Test Server-Side Generation Post</TestTitle>
      <div>No interactions</div>
      <div>{getRes || "no data"}</div>
    </TestItem>
  );
};

export default SsrGetTest;
