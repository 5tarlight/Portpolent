import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="lg:w-96 h-9 md:w-52 sm:flex hidden">
      <input
        placeholder="다른 포트폴리오 찾기"
        className="w-full pl-3 bg-gray-100 outline-none rounded-l-lg"
      />
      <button className="w-10 bg-gray-400 rounded-r-lg flex justify-center items-center">
        <FaSearch />
      </button>
    </div>
  );
}
