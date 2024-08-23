import Subtitle from "../components/Subtitle";

const Home = () => {
  return (
    <div>
      <section></section>
      <section
        className={`flex flex-col w-full text-6xl font-extrabold mt-custom-title-top pt-12`}
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
            <span className={`font-mono font-light`}>[</span>Waterloo
            <span className={`font-mono font-light`}>]</span>
          </a>
        </h3>
        <Subtitle />
      </section>
    </div>
  );
};
export default Home;
