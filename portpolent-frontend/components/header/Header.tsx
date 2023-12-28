import HeaderItemContainer from "./HeaderItemContainer";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="w-screen h-16 bg-white opacity-85 flex justify-between px-8">
      <HeaderItemContainer>
        <Logo />
      </HeaderItemContainer>
      <HeaderItemContainer>2</HeaderItemContainer>
      <HeaderItemContainer>3</HeaderItemContainer>
    </header>
  );
}
