import { BackendResponse, backend, httpGet } from "./backend";
import { ApiCacheTag } from "./tags";

export interface User {
  id: number;
  handle: string;
  username: string;
  accountType: string;
  createdAt: Date;
  updatedAt: Date;
}

export const whoAmI = async () => {
  const res = await httpGet<BackendResponse<User>>(backend("user/whoami"), {
    revalidate: 300,
    tags: [ApiCacheTag.login],
  });
  console.log(res);
};
