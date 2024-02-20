"use client";

import { whoAmI } from "@/lib/user";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const RedirectLogin = () => {
  const searchParams = useSearchParams();
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      const res = await whoAmI(false);

      if (res.ok) {
        const t = searchParams.get("t") || "/";
        push(t);
      } else {
        const t = "/signin";
        push(t);
      }
    })();
  }, []);

  return <h1 className="m-4 text-2xl">Redirecting... Please wait.</h1>;
};

export default RedirectLogin;
