import { redirect } from "next/navigation";

const MyPage = () => {
  redirect("/signin");

  return <div>My Page</div>;
};

export default MyPage;
