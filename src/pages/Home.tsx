import { useState } from "react";
import TitleCard from "../components/TitleCard";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = () => {
    setLoaded(true);
  };

  return (
    <>
      <TitleCard loadedState={handleLoaded} />
      <div>{loaded ? "loaded" : "not loaded"}</div>
    </>
  );
};
export default Home;
