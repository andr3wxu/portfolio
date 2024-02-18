import { useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [isVisible, setIsVisible] = useState(true);

  const onMouseMove = (event: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
    setIsVisible(true);
  };

  const onMouseLeave = () => {
    setIsVisible(false); // Hide on mouse leave
  };

  return (
    <div
      style={{
        zIndex: "-10",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {isVisible && (
        <div
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            width: "10px",
            height: "10px",
            backgroundColor: "red",
            border: "none",
            pointerEvents: "none",
          }}
        ></div>
      )}
    </div>
  );
};

export default CursorFollower;
