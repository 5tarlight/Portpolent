import CsrFetchTest from "@/components/test/CsrFetchTest";
import SsrGetTest from "@/components/test/SsrGetTest";
import SsrPostTest from "@/components/test/SsrPostTest";
import Gap from "@/components/util/Gap";

const TestPage = () => {
  return (
    <>
      <CsrFetchTest />
      <SsrGetTest />
      <SsrPostTest />
      <Gap height="h-16" />
    </>
  );
};

export default TestPage;
