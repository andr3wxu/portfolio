import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home.tsx";
import TitleCard from "./components/TitleCard.tsx";
import Navbar from "./components/Navbar.tsx";
import Links from "./components/Links.tsx";

function App() {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = () => {
    setLoaded(true);
    document.body.style.overflow = "";
  };

  // Prevent scrolling while animation is loading.
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <TitleCard loadedState={handleLoaded} />
      <BrowserRouter basename={"/"}>
        <Navbar loadedState={loaded} />
        <Routes>
          <Route path={""} element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Links />
    </>
  );
}

export default App;
