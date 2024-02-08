import Gap from "@/components/util/Gap";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <form className="w-full h-full">
        <h1 className="text-[2rem] font-bold">Sign Up</h1>
        <input
          className="w-full p-2 mt-8 outline-none rounded-md"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full p-2 mt-2 outline-none rounded-md"
          placeholder="Handle"
        />
        <input
          className="w-full p-2 mt-2 outline-none rounded-md"
          placeholder="Username"
        />
        <input
          className="w-full p-2 mt-2 outline-none rounded-md"
          placeholder="Password"
          type="password"
        />
        <input
          className="w-full p-2 mt-2 outline-none rounded-md"
          placeholder="Confirm Password"
          type="password"
        />
        <button
          className="w-full mt-4 bg-blue-900 text-white p-2 rounded-md font-bold"
          type="submit"
        >
          Sign up
        </button>
      </form>
      <Gap height="h-8" />
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
