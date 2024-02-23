"use client";

import AuthInput from "@/components/auth/AuthInput";
import Gap from "@/components/util/Gap";
import {
  validateEmail,
  validateHandle,
  validatePassword,
  validateUsername,
} from "@/lib/validate/authRegEx";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [handle, setHandle] = useState("");
  const [handleErr, setHandleErr] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState(false);
  const [pw, setPw] = useState("");
  const [pwErr, setPwErr] = useState(false);
  const [pwCon, setPwCon] = useState("");
  const [pwConErr, setPwConErr] = useState(false);

  const handleSignUp = async () => {
    const testEmail = validateEmail(email);
    const testHandle = validateHandle(handle);
    const testUsername = validateUsername(username);
    const testPassword = validatePassword(pw);
    const matchPassword = pw === pwCon;
    setEmailErr(false);
    setHandleErr(false);
    setUsernameErr(false);
    setPwErr(false);
    setPwConErr(false);
    setMsg("");

    if (!matchPassword) {
      setPwConErr(true);
      setMsg("Password does not equal");
    }
    if (!testPassword) {
      setPwErr(true);
      setMsg("Password is not valid or too simple");
    }
    if (!testUsername) {
      setUsernameErr(true);
      setMsg("Username is not valid");
    }
    if (!testHandle) {
      setHandleErr(true);
      setMsg("Handle is not valid");
    }
    if (!testEmail) {
      setEmailErr(true);
      setMsg("Email is not valid");
    }

    if (!msg) {
      // TODO : Sign up
    }
  };

  return (
    <>
      <form className="w-full h-full" action={handleSignUp}>
        <h1 className="text-[2rem] font-bold">Sign Up</h1>
        <AuthInput
          onChange={setEmail}
          type="email"
          value={email}
          placeholder="Email"
          className="mt-8"
          err={emailErr}
        />
        <AuthInput
          onChange={setHandle}
          value={handle}
          placeholder="Handle"
          className="mt-2"
          err={handleErr}
        />
        <AuthInput
          onChange={setUsername}
          value={username}
          placeholder="Username"
          className="mt-2"
          err={usernameErr}
        />
        <AuthInput
          onChange={setPw}
          value={pw}
          placeholder="Password"
          type="password"
          className="mt-2"
          err={pwErr}
        />
        <AuthInput
          onChange={setPwCon}
          value={pwCon}
          placeholder="Confirm Password"
          type="password"
          className="mt-2"
          err={pwConErr}
        />
        <button
          className="w-full mt-4 bg-blue-900 text-white p-2 rounded-md font-bold"
          type="submit"
        >
          Sign up
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
        <Link className="cursor-pointer hover:underline" href="/signin">
          Sign in
        </Link>
        <Link className="cursor-pointer hover:underline" href="/pw"></Link>
      </div>
    </>
  );
};

export default SignUp;
