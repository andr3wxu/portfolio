import { Project } from "../pages/Projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="m-4 flex flex-col">
      <img src="fav.png" className="w-50 opacity-5" />
      <div className="text-md text-slate-400  w-full">
        {project.title}
        <p>{project.techstack}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
