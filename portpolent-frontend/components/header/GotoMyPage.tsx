import { encodeUrl } from "@/lib/backend";
import Link from "next/link";

export default function GotoMyPage() {
  return (
    <div className="hover:cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-md">
      <Link href={encodeUrl("/redirect-login", { t: "/me" })}>
        Manage my portfolio
      </Link>
    </div>
  );
}
