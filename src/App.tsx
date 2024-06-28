import data from "./data";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 ">
      <div className="z-10 max-w-5xl w-full  px-3 md:px-36 ">
        <header className="flex flex-col px-3">
          <a
            className="text-medium inline-block font-medium no-underline text-white"
            href="https://www.linkedin.com/in/jacinth-david-990a03211/"
          >
            {data.name}
          </a>
          <span className="text-medium text-gray-1100">{data.role}</span>
          <span className="text-medium text-gray-1100">{data.username}</span>
          <span className="text-medium text-gray-1100">{data.email}</span>
        </header>

        <div className="mt-24 flex flex-col gap-24">
          <div className="px-3">
            <span className="text-white font-medium ">Today</span>
            <br />
            <br />
            <br />
            <p className="text-medium text-gray-1100">{data.today}</p>
          </div>
          <div>
            <span className="text-white font-medium px-3 ">Projects</span>
            <br />
            <br />
            <br />
            <div className="flex flex-col gap-4">
              {data.projects.map((project) => (
                <a
                  key={project.href}
                  href={project.href}
                  className="flex flex-col gap-2 rounded-md px-3 py-3 no-underline hover:bg-gray-500 hover:text-gray-950"
                >
                  <span className="text-white font-medium ">
                    {project.title}
                  </span>
                  <p className="text-medium text-gray-1100 ">{project.desc}</p>
                </a>
              ))}
            </div>
            <br />
            <br />
            <br />

            <span className="text-white font-medium px-3 ">Animation</span>
            <br />
            <br />

            <div className="flex flex-col gap-4">
              {data.animation.map((project) => (
                <a
                  key={project.href}
                  href={project.href}
                  className="flex flex-col gap-2 rounded-md px-3 py-3 no-underline hover:bg-gray-500 hover:text-gray-950"
                >
                  <span className="text-white font-medium ">
                    {project.title}
                  </span>
                  <p className="text-medium text-gray-1100 ">{project.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-24 px-3">
          <span className="text-white font-medium ">More</span>
          <br />
          <br />
          <p className="text-medium text-gray-1100">
            You can see more of my work on twitter or more of my code on{" "}
            <a href="https://github.com/jdmghk" className="underline">
              Github
            </a>
          </p>
          <br />
          <br />
          <a href="mailto:jacinthdavid70@gmail.com" className="underline">
            Contact Me
          </a>
        </footer>
      </div>
    </main>
  );
}
