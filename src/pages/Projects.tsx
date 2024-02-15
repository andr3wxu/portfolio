import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="font-bold text-blue-600">Work in progress!</h1>
      <Link
        to="/"
        className="font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
      >
        [Go back]
      </Link>
    </div>
  );
};

export default Projects;
