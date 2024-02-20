import { revalidateTag } from "next/cache";

export const backend = (subUrl: string, server: boolean = true) =>
  server ? `http://localhost:8080${subUrl}` : `/api${subUrl}`;

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

export const encodeUrl = (baseUrl: string, params: uriParam) =>
  `${baseUrl}?${encodeQuery(params)}`;

/**
 * https://nextjs.org/docs/app/api-reference/functions/fetch
 */
export interface FetchOption {
  param?: uriParam;
  cache?: "no-store" | "force-cache";
  revalidate?: false | 0 | number;
  tags?: string[];
}

export const httpGet = async <T>(
  url: string,
  opt: FetchOption | undefined = {}
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

export const httpPost = async <T>(
  url: string = "",
  data: object | undefined = {},
  opt: FetchOption | undefined = {}
) => {
  const uri = (() => {
    if (opt.param) return `${url}?${encodeQuery(opt.param)}`;
    else return url;
  })();

  const res = await fetch(uri, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
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
