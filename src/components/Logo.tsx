import logo from '../assets/logo.png'

function Logo() {
    return (
        <>
            <div className="flex h-2/5 w-full flex-col p-10 items-center">
                <img src={logo} alt="placeholder" className="w-40 h-52 drop-shadow-2"/>
                <h1 className="text-stone-100 text-2xl font-semibold">Nikola Ilic</h1>
                <p className="text-stone-400">Data Programmer Analyst</p>
            </div>
        </>
    )
}

export default Logo
