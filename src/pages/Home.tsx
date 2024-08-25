import Subtitle from "../components/Subtitle";
import { useEffect, useState } from "react";
import Background from "../components/Background.tsx";

interface Props {
  loadedState: boolean;
}

const Home = ({ loadedState }: Props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loadedState) {
      setLoaded(true);
    }
  }, [loadedState]);

  return (
    <div className={`z-0`}>
      <section
        className={`${loaded ? "animate-TitleMotion" : "opacity-0"} flex flex-col w-full text-6xl font-extrabold pt-12`}
      >
        <h2 className={`opacity-40`}>
          <span className={`font-roboto-flex-wide`}>HELLO,</span>
          <span className={"font-slab font-normal text-custom-h2"}>
            {" "}
            my name is
          </span>
        </h2>
        <h1 className={`opacity-80`}>
          <span className={`font-light`}>ANDREW</span>
          <span className={`font-roboto-flex-bold text-custom-h1`}> XU</span>
        </h1>
        <h3 className={`font-light opacity-70`}>
          <span className={`opacity-70`}>
            I'm a software engineering student at{" "}
          </span>
          <a
            href={"https://uwaterloo.ca/engineering"}
            target="_blank"
            className={`font-slab text-custom-h3 font-semibold hover:bg-theme-blue hover:text-theme-off-white dark:hover:bg-theme-off-white dark:hover:text-theme-blue transition duration-200`}
          >
            <span className={`font-mono font-light`}>[</span>uWaterloo
            <span className={`font-mono font-light`}>]</span>
          </a>
        </h3>
      </section>
      <Subtitle loadedState={loaded} />
    </div>
  );
};
export default Home;
