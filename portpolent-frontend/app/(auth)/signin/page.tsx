"use client";

import AuthInput from "@/components/auth/AuthInput";
import Gap from "@/components/util/Gap";
import { validateHandle, validatePassword } from "@/lib/validate/authRegEx";
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {
  const [msg, setMsg] = useState("");
  const [handle, setHandle] = useState("");
  const [handleErr, setHandleErr] = useState(false);
  const [pw, setPw] = useState("");
  const [pwErr, setPwErr] = useState(false);

  const handleSignIn = () => {
    const testPassword = !!pw;
    const testHandle = !!handle;
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
      // TODO : Sign In
    }
  };

  return (
    <>
      <form className="w-full h-full" action={handleSignIn}>
        <h1 className="text-[2rem] font-bold">Sign In</h1>
        <AuthInput
          onChange={setHandle}
          value={handle}
          placeholder="Handle"
          className="mt-8"
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
