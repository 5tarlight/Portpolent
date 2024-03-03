"use client";

import ProfileContainer from "@/components/profile/ProfileContainer";
import { User, getUserByHandle } from "@/lib/user";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const handle = searchParams.get("handle");
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (!handle) {
      push("/not-found");
    }

    (async () => {
      const res = await getUserByHandle(handle || "", false);

      if (!res.ok) push("/not-found");

      setUser(res.data.data);
    })();
  }, []);

  return (
    <>{user ? <ProfileContainer user={user} /> : <div>Redirecting...</div>}</>
  );
};

export default ProfilePage;
