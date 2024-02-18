import { Link } from "react-router-dom";

const Subtitle = () => {
  return (
    <section
      id="about"
      className="mt-8 text-slate-400"
      style={{ fontSize: "14.2px", maxWidth: "42vw" }}
    >
      <p className="mb-5">
        I mainly work with{" "}
        <span className="font-semibold text-blue-500">TypeScript</span>,{" "}
        <span className="font-semibold text-cyan-600">Node.js</span>, and{" "}
        <span className="font-semibold text-blue-400">React</span>, but I've
        also used <span className="font-semibold text-slate-500">SQL</span>,{" "}
        <span className="font-semibold text-slate-500">C++</span>,{" "}
        <span className="font-semibold text-slate-500">Django</span>,{" "}
        <span className="font-semibold text-slate-500">OpenCV</span>, and{" "}
        <span className="font-semibold text-slate-500">NumPy</span> in the past.
        <br />
        <br />
        I'm currently designing a web extension to streamline note-taking. Feel
        free to connect with me via <span className="font-semibold">
          email
        </span>{" "}
        or <span className="font-semibold">LinkedIn</span>!
      </p>
      <Link
        to="projects"
        className="font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
      >
        [Projects]
      </Link>
      <a
        href="../../resume.pdf"
        target="_blank"
        className="ml-8 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
      >
        [Resume]
      </a>
    </section>
  );
};

export default Subtitle;
