"use client";

import { encodeUrl } from "@/lib/backend";
import { whoAmI } from "@/lib/user";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const RedirectLogin = () => {
  const searchParams = useSearchParams();
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      const res = await whoAmI(false);
      const t = searchParams.get("t") || "/";

      if (res.ok) {
        push(t);
      } else {
        const path = encodeUrl("/signin", { t });
        push(path);
      }
    })();
  }, []);

  return <h1 className="m-4 text-2xl">Redirecting... Please wait.</h1>;
};

export default RedirectLogin;
