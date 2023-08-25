import Logo from './components/Logo'
import Menu from './components/Menu'
import SocialMedia from './components/SocialMedia'

function App() {
  return (
    <>
    <div className="flex">
      <div className="flex bg-accent w-1/5 min-h-screen flex-col shadow-2 z-0 divide-y first:divide-neutral-500">
        <Logo />
        <Menu />
        <SocialMedia />
      </div>
      <div className="flex bg-background w-4/5 min-h-screen">


      </div>
    </div>
    </>
  )
}

export default App