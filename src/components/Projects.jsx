import Project, { projects } from "./Cards";

function Projects(props) {
  return (
    <div className="  w-dvw bg-gray-500">
      <div className=" flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              name={project.name}
              description={project.description}
              github={project.github}
              server={project.server}
              logo={project.logo.map((logot, index) => (
                <img key={index} src={logot} alt="" className="h-12 w-14" />
              ))}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
