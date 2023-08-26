
function Menu() {
    return (
        <>
            <nav className="flex flex-col pt-10 pb-10 text-center">
                <ul>
                    <li>
                        <a href="#home" className="block p-5 text-stone-200 font-medium hover:bg-action hover:text-secondary hover:shadow-inner2">HOME</a>
                    </li>
                    <li>
                        <a href="#projects" className="block p-5 text-stone-200 font-medium hover:bg-action hover:text-secondary hover:shadow-inner2">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#about-me" className="block p-5 text-stone-200 font-medium hover:bg-action hover:text-secondary hover:shadow-inner2">ABOUT ME</a>
                    </li>
                    <li>
                        <a href="#contact-me" className="block p-5 text-stone-200 font-medium hover:bg-action hover:text-secondary hover:shadow-inner2">CONTACT ME</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu