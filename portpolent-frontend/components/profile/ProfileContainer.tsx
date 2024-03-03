"use server";

import { getUserByHandle } from "@/lib/user";
import Gap from "../util/Gap";
import Content from "../util/Content";
import ProfileImage from "./ProfileImage";
import { redirect } from "next/navigation";

interface Props {
  handle: string;
}

const ProfileContainer = async ({ handle }: Props) => {
  const res = await getUserByHandle(handle, true);

  if (!res.ok) redirect("/not-found");

  const user = res.data.data;

  return (
    <>
      <Gap height="h-16" />
      <div className="w-full flex justify-center">
        <Content className="flex">
          <div>
            <ProfileImage />
            <h1 className="text-2xl w-full text-center">{user.username}</h1>
          </div>
          <div className="flex flex-col"></div>
        </Content>
      </div>
    </>
  );
};

export default ProfileContainer;
