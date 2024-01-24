import { useState } from "react";
import Title from "./Title";
import TitleCard from "./TitleCard";
import Logo from "./Logo";
import Links from "./Links";

const Page = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = (
    isLoaded: boolean | ((prevState: boolean) => boolean)
  ) => {
    setLoaded(isLoaded);
  };
  return (
    <div className="w-full">
      <div
        style={{
          transitionDuration: "0.7s",
          opacity: loaded ? "1" : "0",
          transitionProperty: "opacity",
        }}
      >
        <Logo />
      </div>
      <div className="z-10 mt-60">
        <div
          style={{
            transitionDuration: "0.7s",
            opacity: loaded ? "1" : "0",
            transitionProperty: "opacity",
          }}
        >
          <div
            id="body"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <Title />
            <section id="subtitle">
              i'm a software engineering student @
              <a
                href="https://uwaterloo.ca/"
                target="_blank"
                className="text-blue-600 p font-semibold hover:bg-blue-600 hover:text-white"
              >
                uwaterloo
              </a>
            </section>
            <section
              id="about"
              className="text-xs text-gray-400 max-w-lg mt-6 leading-5"
            >
              <p>
                I mainly work with{" "}
                <span className="text-blue-500 font-semibold">TypeScript</span>,{" "}
                <span className="text-sky-600 font-semibold">Node.js</span>, and{" "}
                <span className="text-blue-400 font-semibold">React</span>, but
                I've also used{" "}
                <span className="font-semibold text-gray-600">SQL</span>,{" "}
                <span className="font-semibold text-gray-600">Django</span>,{" "}
                <span className="font-semibold text-gray-600">OpenCV</span>, and{" "}
                <span className="font-semibold text-gray-600">NumPy</span> in
                the past. Feel free to connect with me via{" "}
                <span className="font-semibold">email</span> or{" "}
                <span className="font-semibold">LinkedIn</span>!
              </p>
              <p className="mt-3"></p>
            </section>
          </div>
          <Links />
        </div>
      </div>
      <TitleCard loadedState={handleLoaded} />
    </div>
  );
};

export default Page;
