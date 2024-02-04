import Content from "@/components/util/Content";
import DoubleContent from "@/components/util/DoubleContent";
import Gap from "@/components/util/Gap";
import TempBox from "@/components/util/TempBox";

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
          <div className="md:h-[10rem] h-[5rem]" />
          <div className="w-full flex flex-col text-center items-center content-center">
            <h1 className="font-extrabold sm:text-[3rem] text-[2rem] mb-8">
              Show Yourself
            </h1>
            <div className="md:w-[50rem] sm:w-[30rem] w-[20rem] self-center text-[1.1rem]">
              Portpolent enables you to express and explain about <b>you</b>.
              With portpolent, you can make a beautiful portfolio without any
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
        </Content>
      </div>

      <div className="mt-32 flex w-full justify-center">
        <Content className="flex flex-col justify-center">
          <h1 className="self-center text-2xl font-bold">
            Portpolent와 함께라면
          </h1>
          <div className="h-16" />
          <DoubleContent>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div>
              <TempBox height="h-64" />
            </div>
          </DoubleContent>
          <Gap height="h-32" />
          <DoubleContent reversed>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div>
              <TempBox height="h-64" />
            </div>
          </DoubleContent>
          <Gap height="h-32" />
          <DoubleContent>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div>
              <TempBox height="h-64" />
            </div>
          </DoubleContent>
          <Gap height="h-[10rem]" />
        </Content>
      </div>
    </>
  );
}
