import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface Props {
  loadedState: boolean;
}

const Navbar = ({ loadedState }: Props) => {
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const links = [
    { name: "Home", link: "", path: "" },
    { name: "Fun:)", link: "404", path: "404" },
  ];
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    if (loadedState) {
      setLoaded(true);
      console.log("loadedState");
    }
  }, [loadedState]);

  return (
    <>
      <section
        className={`z-10 ${loaded ? "animate-NavbarMotion" : ""} fixed -top-20 left-0 w-full flex border-b border-theme-blue bg-theme-off-white/30 justify-between dark:bg-theme-blue/30 dark:border-theme-off-white backdrop-blur-2xl transition duration-200`}
      >
        <div
          className={
            "font-extrabold text-xl p-2.5 hover:text-theme-off-white hover:bg-theme-blue leading-5 bg-theme-off-white border-r border-theme-blue dark:border-theme-off-white dark:bg-theme-blue dark:hover:text-theme-blue dark:hover:bg-theme-off-white transition duration-200 select-none"
          }
        >
          <Link to={""}>
            <p>and</p>
            <p>r3w</p>
          </Link>
        </div>
        <section className={`flex flex-row`}>
          <div className={`flex flex-row items-center justify-between`}>
            {" "}
            {links.map(({ name, link, path }) => {
              return (
                <div
                  key={name}
                  className={`font-normal border ${location.pathname == "/" + path ? "border-theme-blue dark:border-theme-off-white" : "border-transparent"} content-center mr-3 px-1 dark:hover:text-theme-blue dark:hover:bg-theme-off-white hover:border-theme-blue hover:bg-theme-blue hover:text-theme-off-white transition duration-200`}
                >
                  <Link key={name} to={link}>
                    {name}
                  </Link>
                </div>
              );
            })}
          </div>
          <div
            onClick={toggleTheme}
            className={`font-bold text-xl border-l border-theme-blue dark:border-theme-off-white ml-2 flex items-center bg-transparent pl-5 pr-5 rounded-none hover:bg-theme-blue hover:text-theme-off-white dark:hover:bg-theme-off-white dark:hover:text-theme-blue hover:cursor-pointer transition select-none`}
          >
            {theme === "dark" ? "日" : "月"}
          </div>
        </section>
      </section>
    </>
  );
};

export default Navbar;
