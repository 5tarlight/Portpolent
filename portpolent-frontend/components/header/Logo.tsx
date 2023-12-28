"use client";

export default function Logo() {
  return (
    <div className="flex h-12 items-center">
      <div
        className={
          "bg-blue-950 text-white w-12 h-12 flex justify-center items-center" +
          " rounded-lg text-2xl font-bold select-none hover:cursor-pointer mr-3"
        }
        onClick={(e) => {}}
      >
        P
      </div>
      <div className="font-bold text-xl hover:cursor-pointer">Portpolent</div>
    </div>
  );
}
