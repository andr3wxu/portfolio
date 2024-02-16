import ProjectCard from "../components/ProjectCard";

import { Link } from "react-router-dom";

export type Project = {
  title: string;
  imgpath: string;
  description: string;
  github: string | null;
  link: string | null;
  techstack: string[];
};

const projectArray: Project[] = [
  {
    title: "Webnote",
    imgpath: "bleh",
    description: "wefef",
    github: "http://github.com",
    link: null,
    techstack: ["Node"],
  },
  {
    title: "Uniforum",
    imgpath: "bleh",
    description: "wefef",
    github: "http://github.com",
    link: null,
    techstack: ["Node"],
  },
  {
    title: "Emoticon",
    imgpath: "bleh",
    description: "wefef",
    github: "http://github.com",
    link: null,
    techstack: ["Node"],
  },
  {
    title: "temperature alarm",
    imgpath: "bleh",
    description: "wefef",
    github: "http://github.com",
    link: null,
    techstack: ["Node"],
  },
  {
    title: "CSSC Website",
    imgpath: "bleh",
    description: "wefef",
    github: "http://github.com",
    link: null,
    techstack: ["Node"],
  },
  {
    title: "This site :)",
    imgpath: "bleh",
    description: "wefef",
    github: "http://github.com",
    link: null,
    techstack: ["Node"],
  },
  {
    title: "roboflow sticker",
    imgpath: "bleh",
    description: "wefef",
    github: "http://github.com",
    link: null,
    techstack: ["Node"],
  },
];

const Projects = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col items-center"
      style={{ marginTop: "15vh" }}
    >
      <h1 className="font-extrabold text-blue-600 text-6xl">Projects</h1>
      <div className="flex flex-row mt-2">
        <p className="mr-2 text-slate-600">Stay a while...or </p>
        <Link
          to="/"
          className="font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
        >
          [Go back]
        </Link>
      </div>
      <p className="mt-6 text-slate-400">
        (work in progress, if you can't tell)
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {projectArray.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
