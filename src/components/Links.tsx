import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Links = () => {
  const links = [
    {
      name: "/andr3wxu",
      link: "https://github.com/andr3wxu",
      icon: FaGithub,
    },
    {
      name: "/andr3w-xu",
      link: "https://www.linkedin.com/in/andr3w-xu/",
      icon: FaLinkedin,
    },
    {
      name: "andr3w.xu@gmail.com",
      link: "mailto:andr3w.xu@gmail.com",
      icon: FaEnvelope,
    },
  ];
  return (
    <ul className="p-1 flex flex-row justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-screen bg-blue-600">
      {links.map(({ name, link, icon: Icon }) => {
        return (
          <li key={name}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center mx-3 font-light text-blue-600 text-white text-sm px-1 hover:text-blue-600 hover:bg-white "
            >
              <Icon className="mr-1" />
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
