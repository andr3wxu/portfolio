import { useState, useEffect } from "react";

interface Props {
  loadedState: boolean;
}

const Background = ({ loadedState }: Props) => {
  const [loaded, setLoaded] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (loadedState) {
      setLoaded(true);
    }
  }, [loadedState]);

  useEffect(() => {
    setWindowSize({ x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 });
    setPosition({ x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 });

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", () => {
      setWindowSize({
        x: window.innerWidth * 0.5,
        y: window.innerHeight * 0.5,
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{ position: "absolute", height: "100vh", width: "100vw" }}
        className={`${loaded ? "animate-BackgroundMotion" : "opacity-0"} -z-10 text-7xl backdrop-blur-2xl bg-theme-off-white/20 dark:bg-theme-blue/20 dark:backdrop-blur-3xl`}
      ></div>
      <div
        style={{
          position: "absolute",
          left: windowSize.x - (windowSize.x - position.x) / 30,
          top: windowSize.y - (windowSize.y - position.y) / 30,
          transform: "translate(-50%, -50%)",
          height: "100vh",
          width: "100vw",
        }}
        className={`${loaded ? "animate-BackgroundMotion" : "opacity-0"} -z-20 text-7xl bg-bg-light dark:bg-bg-dark bg-cover`}
      ></div>
    </>
  );
};

export default Background;
