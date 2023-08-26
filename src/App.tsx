import Logo from './components/Logo'
import Menu from './components/Menu'
import SocialMedia from './components/SocialMedia'
import Home from './components/Home'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import DarkModeIcon from './components/DarkModeIcon'

function App() {
  return (
    <>
      <div className="flex h-full">
        <div className="flex dark:bg-accent w-1/5 flex-col shadow-2 z-0 divide-y first:divide-neutral-500">
          <Logo />
          <Menu />
          <SocialMedia />
        </div>
        <div className="flex flex-col dark:bg-background w-4/5 gap-y-96 overflow-y-auto">
          <DarkModeIcon />
          <Home />
          <Projects />
          <AboutMe />
          <ContactMe />
        </div>
      </div>
    </>
  )
}

export default App