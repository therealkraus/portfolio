function Home() {
  return (
    <>
      <section id="home" className="">
        <h1 className="text-2xl md:text-5xl md:font-semibold dark:text-stone-300 md:leading-relaxed">
          Hello! I'm <strong className="text-primary">Nikola Ilic</strong>,{" "}
          <br /> currently a student at, <br /> Ryerson's BTM program.
        </h1>
        <a
          href="#contact-me"
          className="inline-block md:text-3xl bg-transparent text-secondary font-medium md:px-12 md:py-5 px-8 py-3 mt-10 border-secondary border-2 hover:bg-secondary dark:hover:text-background hover:text-white rounded-lg"
        >
          CONTACT ME
        </a>
      </section>
    </>
  );
}

export default Home;
