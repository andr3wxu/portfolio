import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section>
        <br />
        <br />
        <br />
      </section>
      <section className={`flex flex-col w-full text-6xl font-extrabold`}>
        <h2>
          <span className={`font-roboto-flex`}>HELLO,</span>
          <span className={"font-slab font-normal"}> my name is</span>
        </h2>
        <h1>
          <span className={`font-normal`}>ANDREW</span>
          <span className={`font-roboto-flex-bold`}> XU</span>
        </h1>
      </section>
    </div>
  );
};
export default Home;
