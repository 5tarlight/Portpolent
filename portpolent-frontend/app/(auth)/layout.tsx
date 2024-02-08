import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const gradient = `linear-gradient(45deg, rgba(255,232,232,1) 0%, rgba(255,241,225,1) 16%, rgba(253,255,215,1) 33%, rgba(223,255,223,1) 49%, rgba(226,234,255,1) 65%, rgba(235,225,255,1) 82%, rgba(255,237,251,1) 100%)`;

  return (
    <div>
      <div
        className="w-full h-screen flex flex-col justify-center text-center items-center mt-[-4rem] bg-cover"
        style={{ background: gradient }}
      >
        <div className="md:w-[30rem] w-[20rem] h-fit bg-white p-4 rounded-md bg-opacity-70 flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
