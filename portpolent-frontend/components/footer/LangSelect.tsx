import { IoIosArrowDown } from "react-icons/io";

const LangSelect = () => {
  return (
    <div className="cursor-pointer flex content-center items-center">
      <div className="w-[32px] h-[18px] bg-white mr-2 rounded-sm text-black flex justify-center items-center">
        EN
      </div>
      <p className="mr-1">English, US</p>
      <IoIosArrowDown />
    </div>
  );
};

export default LangSelect;
