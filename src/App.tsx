import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home.tsx";
import TitleCard from "./components/TitleCard.tsx";
import Navbar from "./components/Navbar.tsx";
import Links from "./components/Links.tsx";
import NotFound from "./pages/NotFound.tsx";
import Background from "./components/Background.tsx";

function App() {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = () => {
    setLoaded(true);
    document.body.style.overflow = "";
  };

  // Prevent scrolling while animation is loading.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    localStorage.setItem("theme", "dark"); // Set default theme to dark
  }, []);

  return (
    <>
      <TitleCard loadedState={handleLoaded} />
      <Background loadedState={loaded} />
      <BrowserRouter basename={"/"}>
        <Navbar loadedState={loaded} />
        <Routes>
          <Route path={""} element={<Home loadedState={loaded} />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Links loadedState={loaded} />
    </>
  );
}

export default App;
