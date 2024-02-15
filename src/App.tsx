import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Page from "./pages/Page";
import Links from "./components/Links";
import TitleCard from "./components/TitleCard";
import Projects from "./pages/Projects";
// import MouseTrail from "./components/MouseTrail";

function App() {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = (
    isLoaded: boolean | ((prevState: boolean) => boolean)
  ) => {
    setLoaded(isLoaded);
  };
  return (
    <>
      {/* <MouseTrail /> */}
      <TitleCard loadedState={handleLoaded} />
      <div
        style={{
          transitionDuration: "0.7s",
          opacity: loaded ? "1" : "0",
          transitionProperty: "opacity",
        }}
        className="w-full"
      >
        <BrowserRouter basename="/">
          <Routes>
            <Route path="" element={<Page />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
        <Links />
      </div>
    </>
  );
}

export default App;
