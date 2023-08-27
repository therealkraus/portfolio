import vrgames from "../assets/vrgames.png";

function Projects() {
  return (
    <>
      <section id="projects" className="space-y-5">
        <h1 className="text-3xl md:text-5xl font-semibold dark:text-stone-300 leading-relaxed">
          Projects
        </h1>

        <div className="grid lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-4 grid-cols-1 gap-4">
          <div className="bg-stone-100 rounded-xl shadow-2 dark:bg-accent hover:outline hover:outline-2 hover:outline-secondary group">
            <a
              href="#"
              className="flex overflow-hidden h-auto rounded-t-lg items-center"
            >
              <img
                src={vrgames}
                className="transition ease group-hover:scale-125 duration-300"
              />
            </a>
            <div className="p-5">
              <h1 className="md:text-2xl font-semibold dark:text-stone-100">
                VR GAME VIEWER
              </h1>
              <p className="dark:text-stone-400">
                A website that allows users to view trailers and information
                about VR games.
              </p>
            </div>
          </div>
          <div className="bg-stone-100 rounded-xl shadow-2 dark:bg-accent hover:outline hover:outline-2 hover:outline-secondary group">
            <a
              href="#"
              className="flex overflow-hidden h-auto rounded-t-lg items-center"
            >
              <img
                src={vrgames}
                className="transition ease group-hover:scale-125 duration-300"
              />
            </a>
            <div className="p-5">
              <h1 className="md:text-2xl font-semibold dark:text-stone-100">
                VR GAME VIEWER
              </h1>
              <p className="dark:text-stone-400">
                A website that allows users to view trailers and information
                about VR games.
              </p>
            </div>
          </div>
          <div className="bg-stone-100 rounded-xl shadow-2 dark:bg-accent hover:outline hover:outline-2 hover:outline-secondary group">
            <a
              href="#"
              className="flex overflow-hidden h-auto rounded-t-lg items-center"
            >
              <img
                src={vrgames}
                className="transition ease group-hover:scale-125 duration-300"
              />
            </a>
            <div className="p-5">
              <h1 className="md:text-2xl font-semibold dark:text-stone-100">
                VR GAME VIEWER
              </h1>
              <p className="dark:text-stone-400">
                A website that allows users to view trailers and information
                about VR games.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
