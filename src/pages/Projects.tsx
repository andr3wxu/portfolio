import ProjectCard from "../components/ProjectCard";

import { Link } from "react-router-dom";

export type Project = {
  title: string;
  subtitle: string | null;
  imgpath: string;
  description: string;
  github: string | null;
  link: string | null;
  techstack: string[];
};

const projectArray: Project[] = [
  {
    title: "Webnote",
    subtitle: "Web Extension",
    imgpath: "bleh",
    description: "wefef",
    github: "http://github.com",
    link: null,
    techstack: ["Node"],
  },
  {
    title: "Uniforum",
    subtitle: "Discussion Forum",
    imgpath: "bleh",
    description: "wefef",
    github: "http://github.com",
    link: null,
    techstack: ["Node"],
  },
  {
    title: "Emoticon",
    subtitle: "Neural Network",
    imgpath: "bleh",
    description: "wefef",
    github: "http://github.com",
    link: null,
    techstack: ["Node"],
  },
  {
    title: "temperature alarm",
    subtitle: null,
    imgpath: "bleh",
    description: "wefef",
    github: "http://github.com",
    link: null,
    techstack: ["Node"],
  },
  {
    title: "CSSC Website",
    subtitle: null,
    imgpath: "bleh",
    description: "wefef",
    github: "http://github.com",
    link: null,
    techstack: ["Node"],
  },
  {
    title: "This site :)",
    subtitle: null,
    imgpath: "bleh",
    description: "wefef",
    github: "http://github.com",
    link: null,
    techstack: ["Node"],
  },
  {
    title: "roboflow sticker",
    subtitle: null,
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
      style={{ marginTop: "10vh" }}
    >
      <section id="title" className="mb-16">
        <h2
          className="text-slate-400 font-semibold"
          style={{
            fontSize: "3.2vw",
            marginBottom: "-0.4em",
          }}
        >
          my
        </h2>
        <h1
          className="font-extrabold text-blue-600"
          style={{ fontSize: "5.5vw", marginLeft: "-0.2vw" }}
        >
          projects
        </h1>
        <section
          className="text-slate-400 flex flex-col text-right mt-3 w-full"
          style={{ fontSize: "0.9em", width: "30vw" }}
        >
          <p className="text-lg text-slate-500 mt-1">
            Some stuff I've worked on recently.
          </p>
          <p className="mr-1">
            Stay a while...or{" "}
            <Link
              to="/"
              className="font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              [Go back]
            </Link>
          </p>
        </section>
      </section>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {projectArray.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
