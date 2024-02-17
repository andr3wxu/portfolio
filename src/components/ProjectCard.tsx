import { Project } from "../pages/Projects";

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
          opacity: `${index % 4 == 0 || index % 5 == 0 ? "3%" : "0%"}`,
          width: "100%",
        }}
      />
      <div
        className="text-slate-400"
        style={{ margin: "3vw", fontSize: "1em" }}
      >
        <h2 className="font-bold text-blue-600 mb-1">{project.title}</h2>
        <section id="description" style={{ fontSize: "0.9em" }}>
          <h3 className="font-semibold text-slate-400">{project.subtitle}</h3>
          <p>{project.description}</p>
          <div id="tech-stack">{project.techstack}</div>
        </section>
        <section id="links" style={{ position: "absolute", bottom: "3vw" }}>
          fdsfe
        </section>
      </div>
    </div>
  );
};

export default ProjectCard;
