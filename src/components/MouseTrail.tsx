import { useState } from "react";

const MouseTrail = () => {
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  const onMouseMove = (event: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = event;
    console.log("Mouse Moved:", clientX, clientY);
    setTrail((prevTrail) => [...prevTrail, { x: clientX, y: clientY }]);
  };

  return (
    <div
      style={{
        zIndex: "100",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      onMouseMove={onMouseMove}
    >
      {trail.map((position, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            width: "10px", // Larger Size
            height: "10px", // Larger Size
            backgroundColor: "red", // Obvious color
            border: "none", // Remove the border temporarily
            opacity: 1 - index / 50,
          }}
        ></div>
      ))}
    </div>
  );
};

export default MouseTrail;
