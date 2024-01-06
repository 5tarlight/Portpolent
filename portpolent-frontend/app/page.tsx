import Content from "@/components/util/Content";

export default function Home() {
  const gradient =
    "linear-gradient(157deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, " +
    "rgba(250,225,255,1) 31%, rgba(234,229,255,1) 37%, rgba(234,244,255,1) 44%, " +
    "rgba(237,255,242,1) 49%, rgba(249,255,241,1) 55%, rgba(255,244,222,1) 62%, " +
    "rgba(255,244,236,1) 68%, rgba(255,233,233,1) 75%, rgba(255,255,255,1) 100%)";

  return (
    <>
      <div
        className="w-full h-fit bg-white flex justify-center"
        style={{ background: gradient }}
      >
        <Content>
          <>
            <div className="md:h-[10rem] h-[5rem]" />
            <div className="w-full flex flex-col text-center items-center content-center">
              <h1 className="font-extrabold sm:text-[3rem] text-[2rem] mb-8">
                Show Yourself
              </h1>
              <div className="md:w-[50rem] sm:w-[30rem] w-[20rem] self-center text-[1.1rem]">
                Portpolent enables you to express and explain about <b>you</b>.
                With portpolent,you can make a beautiful portfolio without any
                codes, hardships and etc. Sign up for free and start your{" "}
                <b>story</b>.
              </div>
            </div>
            <div className="flex justify-center my-[6rem]">
              <button className="bg-blue-950 px-6 py-3 text-white rounded-lg mr-8">
                Get Started
              </button>
              <button
                className={
                  "px-6 py-3 rounded-lg border-gray-400 border-2 bg-white " +
                  "backdrop-blur-lg bg-opacity-80"
                }
              >
                Learn more
              </button>
            </div>
          </>
        </Content>
      </div>

      <div className=""></div>
    </>
  );
}
