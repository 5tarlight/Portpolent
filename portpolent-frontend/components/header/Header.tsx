import GotoMyPage from "./GotoMyPage";
import HeaderItemContainer from "./HeaderItemContainer";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  return (
    <header className="w-screen h-16 backdrop-blur-xlg top-0 left-0 fixed z-[1000]">
      <div className="flex w-full h-full justify-between px-8 bg-white backdrop-blur-sm bg-opacity-80">
        <HeaderItemContainer>
          <Logo />
        </HeaderItemContainer>
        <HeaderItemContainer>
          <Search />
        </HeaderItemContainer>
        <HeaderItemContainer>
          <GotoMyPage />
        </HeaderItemContainer>
      </div>
    </header>
  );
}
