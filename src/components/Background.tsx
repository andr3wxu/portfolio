import { useState, useEffect } from "react";

interface Props {
  loadedState: boolean;
}

const Background = ({ loadedState }: Props) => {
  const [loaded, setLoaded] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (loadedState) {
      setLoaded(true);
    }
  }, [loadedState]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <h1
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
      className={`-z-10`}
    >
      {position.x}
    </h1>
  );
};

export default Background;
