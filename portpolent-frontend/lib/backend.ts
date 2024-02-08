import { revalidateTag } from "next/cache";

export const backend = (subUrl: string) => `/api/${subUrl}`;

export interface BackendResponse<T> {
  status: "Success" | "Fail" | "Error";
  data: T;
  message: string | null;
}

export type uriParam = { [key: string]: string };

export const encodeQuery = (obj: uriParam | undefined = {}) => {
  const query = [];
  for (const p in obj) {
    query.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  }

  return query.join("&");
};

/**
 * https://nextjs.org/docs/app/api-reference/functions/fetch
 */
export interface GetOption {
  param?: uriParam;
  cache?: "no-store" | "force-cache";
  revalidate?: false | 0 | number;
  tags?: string[];
}

export const httpGet = async <T>(
  url: string = "",
  opt: GetOption | undefined = {}
) => {
  const uri = (() => {
    if (opt.param) return `${url}?${encodeQuery(opt.param)}`;
    else return url;
  })();

  const res = await fetch(uri, {
    cache: opt.cache,
    next: {
      revalidate: opt.revalidate,
      tags: opt.tags,
    },
  });

  return {
    status: res.status,
    ok: res.ok,
    data: (await res.json()) as T,
  };
};

export const revalidateTags = (tags: string[]) => {
  tags.forEach(revalidateTag);
};
