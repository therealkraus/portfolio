import Logo from "./Logo";
import Menu from "./Menu";
import SocialMedia from "./SocialMedia";

function SideBar() {
  return (
    <>
      <div
        id="sidebar"
        className="flex dark:bg-accent w-1/5 flex-col shadow-2 z-0 divide-y first:divide-neutral-500"
      >
        <Logo />
        <Menu />
        <SocialMedia />
      </div>
    </>
  );
}

export default SideBar;
