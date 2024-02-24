"use client";

import AuthInput from "@/components/auth/AuthInput";
import Gap from "@/components/util/Gap";
import { signIn } from "@/lib/user";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [handleErr, setHandleErr] = useState(false);
  const [pw, setPw] = useState("");
  const [pwErr, setPwErr] = useState(false);
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const handleSignIn = async () => {
    const testPassword = !!pw;
    const testHandle = !!email;
    setHandleErr(false);
    setPwErr(false);
    setMsg("");

    if (!testPassword) {
      setPwErr(true);
      setMsg("Password is required");
    }
    if (!testHandle) {
      setHandleErr(true);
      setMsg("Handle is required");
    }

    if (!msg) {
      const res = await signIn(false, { email, password: pw });

      if (res.ok) {
        const t = searchParams.get("t") || "/";
        push(t);
      } else {
        setMsg(res.data.message || "Failed to sign in");
      }
    }
  };

  return (
    <>
      <form className="w-full h-full" action={handleSignIn}>
        <h1 className="text-[2rem] font-bold">Sign In</h1>
        <AuthInput
          onChange={setEmail}
          value={email}
          placeholder="Email"
          className="mt-8"
          type="email"
          err={handleErr}
        />
        <AuthInput
          onChange={setPw}
          value={pw}
          placeholder="Password"
          className="mt-2"
          err={pwErr}
          type="password"
        />
        <button
          className="w-full mt-4 bg-blue-900 text-white p-2 rounded-md font-bold"
          type="submit"
        >
          Sign in
        </button>
      </form>

      {msg ? (
        <div className="mt-4 mb-8 w-full text-left text-red-500 underline">
          {msg}
        </div>
      ) : (
        <Gap height="h-8" />
      )}

      <div className="flex justify-between">
        <Link className="cursor-pointer hover:underline" href="/signup">
          Sign up
        </Link>
        <Link className="cursor-pointer hover:underline" href="/pw">
          Do you have trouble?
        </Link>
      </div>
    </>
  );
};

export default SignIn;
