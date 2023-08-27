import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import DarkModeIcon from "./components/DarkModeIcon";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="">
        <div className="flex h-screen overflow-y-auto">
          <SideBar />
          <div className="flex flex-col dark:bg-background gap-y-96 overflow-y-auto p-14 md:p-28">
            <DarkModeIcon />
            <Home />
            <Projects />
            <AboutMe />
            <ContactMe />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
