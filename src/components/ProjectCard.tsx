import { Project } from "../pages/Projects";
import Tech from "./Tech";

interface Props {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => {
  return (
    <div
      className="relative flex flex-col"
      style={{ width: "20vw", height: "20vw" }}
    >
      <img
        src="fav.png"
        className="absolute top-0"
        style={{
          opacity: `${
            index % 4 == 0 || index % 5 == 0 || index == 6 ? "3%" : "0%"
          }`,
          width: "100%",
        }}
      />
      <div
        className="text-slate-400"
        style={{ margin: "3.1vw", fontSize: "1.5vw" }}
      >
        <h2 className="font-bold text-blue-600 mb-1 opacity-85">
          {project.title}
        </h2>
        <section id="description" style={{ fontSize: "0.8vw" }}>
          <p className="font-light">
            <span className="font-semibold text-slate-400">
              {project.subtitle}{" "}
            </span>
            {project.description}
          </p>
          <Tech stack={project.techstack} />
        </section>
        <section
          id="links"
          style={{ position: "absolute", bottom: "3vw", fontSize: "0.8vw" }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="font-semibold text-blue-600 opacity-90 hover:bg-blue-600 hover:text-white"
            >
              [Github]
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="ml-1 font-semibold text-blue-600 opacity-90 hover:bg-blue-600 hover:text-white"
            >
              [Link]
            </a>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectCard;
