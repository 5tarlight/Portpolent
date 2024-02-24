"use client";

import { encodeUrl } from "@/lib/backend";
import { whoAmI } from "@/lib/user";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MyPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      const res = await whoAmI(false);

      if (res.ok) {
        push(encodeUrl("/profile", { handle: res.data.data.handle }));
      } else {
        push(encodeUrl("/signin", { t: "/me" }));
      }
    })();
  });

  return <h1 className="m-4 text-2xl">Redirecting... Please wait.</h1>;
};

export default MyPage;
