import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import DarkModeIcon from "./components/DarkModeIcon";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="flex h-full">
        <SideBar />
        <div className="flex flex-col dark:bg-background w-4/5 gap-y-96 overflow-y-auto">
          <DarkModeIcon />
          <Home />
          <Projects />
          <AboutMe />
          <ContactMe />
        </div>
      </div>
    </>
  );
}

export default App;
