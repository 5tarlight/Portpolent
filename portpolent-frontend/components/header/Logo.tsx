"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex h-12 items-center">
        <div
          className={
            "bg-blue-950 text-white w-12 h-12 flex justify-center items-center" +
            " rounded-lg text-2xl font-bold select-none hover:cursor-pointer mr-2"
          }
        >
          P
        </div>
        <div className="font-bold text-xl hover:cursor-pointer md:block hidden">
          Portpolent
        </div>
      </div>
    </Link>
  );
}
