import Logo from "./Logo";
import Menu from "./Menu";
import SocialMedia from "./SocialMedia";

function SideBar() {
  return (
    <>
      <div
        id="sidebar"
        className="hidden lg:flex h-full min-w-fit dark:bg-accent flex-col shadow-2 z-0 divide-y first:divide-neutral-500 -translate-x-full md:translate-x-0"
      >
        <Logo />
        <Menu />
        <SocialMedia />
      </div>
    </>
  );
}

export default SideBar;
