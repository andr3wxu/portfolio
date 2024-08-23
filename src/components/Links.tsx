import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

interface Props {
  loadedState: boolean;
}

const Links = ({ loadedState }: Props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loadedState) {
      setLoaded(true);
    }
  }, [loadedState]);

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
    <ul
      className={`${loaded ? "animate-LinksMotion" : ""} p-4 flex flex-row justify-center fixed -bottom-10 left-1/2 transform -translate-x-1/2 w-screen`}
    >
      {links.map(({ name, link, icon: Icon }) => {
        return (
          <li key={name}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center mx-3 font-light text-sm px-1 hover:bg-theme-blue hover:text-theme-off-white dark:hover:bg-theme-off-white dark:hover:text-theme-blue hover:cursor-pointer transition duration-200"
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
