import Gap from "@/components/util/Gap";
import Link from "next/link";

const SignIn = () => {
  return (
    <>
      <form className="w-full h-full">
        <h1 className="text-[2rem] font-bold">Sign In</h1>
        <input
          className="w-full p-2 mt-8 outline-none rounded-md"
          placeholder="Handle"
        />
        <input
          className="w-full p-2 mt-2 outline-none rounded-md"
          placeholder="Password"
          type="password"
        />
        <button
          className="w-full mt-4 bg-blue-900 text-white p-2 rounded-md font-bold"
          type="submit"
        >
          Sign in
        </button>
      </form>
      <Gap height="h-8" />
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
