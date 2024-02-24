import { BackendResponse, backend, httpPost } from "@/lib/backend";
import TestItem from "./TestItem";
import TestTitle from "./TestTitle";

const postData = async () => {
  const res = await httpPost<BackendResponse<string>>(
    backend("/hello"),
    {},
    {
      cache: "no-store",
    }
  );

  return JSON.stringify(res);
};

const SsrPostTest = async () => {
  const postRes = await postData();

  return (
    <TestItem>
      <TestTitle>Test Server-Side Generation Post</TestTitle>
      <div>No interactions</div>
      <div>{postRes || "no data"}</div>
    </TestItem>
  );
};

export default SsrPostTest;
