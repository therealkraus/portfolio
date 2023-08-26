function Home() {

    return (
        <>
            <section id="home" className="max-w-screen-xl pl-28 pt-28">
                <h1 className="text-5xl font-semibold dark:text-stone-300 leading-relaxed">
                    Hello! I'm <strong className="text-primary">Nikola Ilic</strong>, <br /> currently a student at, <br /> Ryerson's BTM program.
                </h1>
                <a href="#contact-me" className="inline-block text-2xl  bg-transparent text-secondary font-medium px-12 py-5 mt-10 border-secondary border-2 hover:bg-secondary dark:hover:text-background hover:text-white rounded-lg">CONTACT ME</a>
            </section>
        </>
    )
}

export default Home