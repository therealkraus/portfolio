
function Menu() {
    return (
        <>
            <nav className="flex flex-col pt-10 pb-10 text-center">
                <ul>
                <li>
                    <a href="#" className="block p-5 text-stone-400 font-medium hover:bg-action hover:text-secondary">HOME</a>
                </li>
                <li>
                    <a href="#" className="block p-5 text-stone-400 font-medium hover:bg-action hover:text-secondary">PROJECTS</a>
                </li>
                <li>
                    <a href="#" className="block p-5 text-stone-400 font-medium hover:bg-action hover:text-secondary">ABOUT ME</a>
                </li>
                <li>
                    <a href="#" className="block p-5 text-stone-400 font-medium hover:bg-action hover:text-secondary">CONTACT ME</a>
                </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu