import logo from './assets/logo.png'

function App() {
  return (
    <>
    <div className="flex">
      <div className="flex bg-accent w-1/5 min-h-screen flex-col shadow-2 z-0 divide-y divide-neutral-500">
        <div className="flex h-2/5 w-full flex-col p-10 items-center">
          <img src={logo} alt="placeholder" className="w-40 h-52"/>
          <h1 className="text-stone-100 text-2xl font-semibold">Nikola Ilic</h1>
          <p className="text-stone-400">Ryerson Student</p>
        </div>
        <nav className="flex h-3/5 flex-col pt-10 text-center">
          <ul>
            <li>
              <a href="#" className="block p-5 text-stone-400 font-medium hover:bg-action hover:text-secondary">Home</a>
            </li>
            <li>
              <a href="#" className="block p-5 text-stone-400 font-medium hover:bg-action hover:text-secondary">Projects</a>
            </li>
            <li>
              <a href="#" className="block p-5 text-stone-400 font-medium hover:bg-action hover:text-secondary">About Me</a>
            </li>
            <li>
              <a href="#" className="block p-5 text-stone-400 font-medium hover:bg-action hover:text-secondary">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex bg-background w-4/5 min-h-screen">


      </div>
    </div>
    </>
  )
}

export default App