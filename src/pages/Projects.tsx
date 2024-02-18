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
    description:
      "which allows users to record notes directly within their web browser.",
    github: "https://github.com/andr3wxu/webnote-client",
    link: null,
    techstack: ["React", "Django", "PostgreSQL"],
  },
  {
    title: "Uniforum",
    subtitle: "Discussion Forum",
    imgpath: "bleh",
    description:
      "which displays posts, comments, and upvotes by unique profiles.",
    github: "https://github.com/andr3wxu/uniforum-client",
    link: "http://uniforum-client.s3-website-us-east-1.amazonaws.com/",
    techstack: ["React", "Node.js", "Express", "MySQL"],
  },
  {
    title: "Emoticon",
    subtitle: "Neural Network",
    imgpath: "bleh",
    description: "which detects the sentiment of hand-drawn emoticons.",
    github: "https://github.com/andr3wxu/emoticon",
    link: "http://emoticon.s3-website-us-east-1.amazonaws.com/",
    techstack: ["React", "Node.js", "OpenCV", "NumPy"],
  },
  {
    title: "Temperature Sensor",
    subtitle: "STM32 Dev. Board",
    imgpath: "bleh",
    description: "which signals users of irreguralities in temperature.",
    github: "https://github.com/andr3wxu/ECE198",
    link: null,
    techstack: ["C", "STM32"],
  },
  {
    title: "CSSC Website",
    subtitle: "Webpage",
    imgpath: "bleh",
    description: "for the Calgary Science Spelling Challenge non-profit.",
    github: "https://github.com/andr3wxu/CSSC",
    link: "https://csschallenge.ca",
    techstack: ["React", "Typescript"],
  },
  {
    title: "Sticker Detector",
    subtitle: "Neural Network",
    imgpath: "bleh",
    description:
      "running on the YoloV8 model to detect faulty sticker placements.",
    github: null,
    link: null,
    techstack: ["OpenCV", "NumPy", "Matplotlib"],
  },
  {
    title: "This site :)",
    subtitle: null,
    imgpath: "bleh",
    description: "",
    github: "http://github.com/andr3wxu/portfolio",
    link: null,
    techstack: ["React", "Typescript"],
  },
];

const Projects = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col items-center"
      style={{ marginTop: "14vh" }}
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
