import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Logo from "../components/Logo";

const Page = () => {
  return (
    <div
      className="w-full mt-60"
      style={{ marginLeft: "26vw", paddingRight: "20vw" }}
    >
      <Logo />
      <div
        id="body"
        className="flex flex-col text-left"
        style={{ zIndex: "10" }}
      >
        <Title />
        <section
          id="subtitle"
          className="text-lg text-slate-500 mt-1"
          style={{ width: "43vw" }}
        >
          i'm a software engineering student{" "}
          <a
            href="https://uwaterloo.ca/"
            target="_blank"
            className="font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            [@uwaterloo]
          </a>
        </section>
        <Subtitle />
      </div>
    </div>
  );
};

export default Page;
