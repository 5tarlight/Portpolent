"use client";

import { whoAmI } from "@/lib/user";

const checkLogin = async () => {
  return await whoAmI();
};

const RedirectLogin = () => {
  checkLogin();

  return <h1 className="m-4 text-2xl">Redirecting... Please wait.</h1>;
};

export default RedirectLogin;
