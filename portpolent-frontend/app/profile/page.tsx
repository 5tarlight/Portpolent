"use client";

import ProfileContainer from "@/components/profile/ProfileContainer";
import { useRouter, useSearchParams } from "next/navigation";

const ProfilePage = () => {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const handle = searchParams.get("handle");
  if (!handle) {
    push("/not-found");
  }

  return (
    <>
      {handle ? (
        <ProfileContainer handle={handle} />
      ) : (
        <div>Redirecting...</div>
      )}
    </>
  );
};

export default ProfilePage;
