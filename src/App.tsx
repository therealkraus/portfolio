import Logo from './components/Logo'
import Menu from './components/Menu'
import SocialMedia from './components/SocialMedia'
import Home from './components/Home'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'

function App() {
  return (
    <>
    <div className="flex">
      <div className="flex bg-accent w-1/5 min-h-screen flex-col shadow-2 z-0 divide-y first:divide-neutral-500">
        <Logo />
        <Menu />
        <SocialMedia />
      </div>
      <div className="flex flex-col bg-background w-4/5 min-h-screen gap-y-96">
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