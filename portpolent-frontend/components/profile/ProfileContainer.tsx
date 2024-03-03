"use client";

import { User } from "@/lib/user";
import Gap from "../util/Gap";
import Content from "../util/Content";
import ProfileImage from "./ProfileImage";

interface Props {
  user: User;
}

const ProfileContainer = ({ user }: Props) => {
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
