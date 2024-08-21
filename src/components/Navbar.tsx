import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(() => {
  //   return localStorage.getItem("darkMode") === "true";
  // });

  const [theme, setTheme] = useState(() => {
    // Check for stored theme in localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    // Default to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const links = [
    { name: "Home", link: "", path: "" },
    { name: ":)", link: "404", path: "404" },
  ];
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // const toggleDarkMode = () => {
  //   setDarkMode((prev) => !prev);
  //   console.log(darkMode);
  // };
  //
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("darkMode", "true");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("darkMode", "false");
  //   }
  // }, [darkMode]);
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

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full flex border-b border-theme-blue bg-theme-off-white/30 justify-between dark:bg-theme-blue/30 dark:border-theme-off-white backdrop-blur-2xl transition duration-200`}
      >
        <div
          className={
            "font-extrabold text-xl p-2 hover:text-theme-off-white hover:bg-theme-blue leading-5 bg-theme-off-white border-r border-theme-blue dark:border-theme-off-white dark:bg-theme-blue dark:hover:text-theme-blue dark:hover:bg-theme-off-white transition duration-200"
          }
        >
          <Link to={""}>
            <p>and</p>
            <p>r3w</p>
          </Link>
        </div>
        <div className={`flex flex-row`}>
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
          <div className={`border-l border-theme-blue ml-2`}>
            <button onClick={toggleTheme} className={`bg-theme-blue`}>
              hi
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
