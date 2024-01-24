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
    <>
      <div
        style={{
          transitionDuration: "0.7s",
          opacity: loaded ? "1" : "0",
          transitionProperty: "opacity",
        }}
      >
        <Logo />
      </div>
      <div className="z-10 relative">
        <div className="absolute">{loaded}</div>
        <div
          style={{
            transitionDuration: "0.7s",
            opacity: loaded ? "1" : "0",
            transitionProperty: "opacity",
          }}
        >
          <Title />
          <section id="subtitle">
            i'm a software engineering student @
            <a
              href="https://uwaterloo.ca/"
              target="_blank"
              className="text-blue-600 px-1 font-semibold hover:bg-blue-600 hover:text-white"
            >
              uwaterloo
            </a>
          </section>
          <Links />
        </div>
      </div>
      <TitleCard loadedState={handleLoaded} />
    </>
  );
};

export default Page;
