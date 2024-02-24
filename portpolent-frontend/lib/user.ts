import { BackendResponse, backend, httpGet, httpPost } from "./backend";
import { ApiCacheTag } from "./tags";

export interface User {
  id: number;
  handle: string;
  username: string;
  accountType: string;
  createdAt: Date;
  updatedAt: Date;
}

export const whoAmI = async (server: boolean = true) => {
  const res = await httpGet<BackendResponse<User>>(
    backend("/user/whoami", server),
    {
      revalidate: 300,
      tags: [ApiCacheTag.auth, ApiCacheTag.login],
    }
  );

  return res;
};

export const signUp = async (
  server: boolean,
  body: {
    email: string;
    handle: string;
    username: string;
    password: string;
  }
) => {
  const res = await httpPost<BackendResponse<User>>(
    backend("/user/signup", server),
    body,
    {
      cache: "no-store",
    }
  );

  return res;
};
