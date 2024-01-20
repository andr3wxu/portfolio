import { useState, useEffect } from "react";

const TitleCard = ({ loadedState }) => {
  const [loaded, setLoaded] = useState(false);
  const [tempArray, setTempArray] = useState([" ", " ", " ", " ", " ", " "]);
  const [iterator, setIterator] = useState(0);
  const nameArray = ["a", "n", "d", "r", "3", "w"];

  const genChar = () => {
    const charset = "bcfghijklmopqstuvxyzandrew1234567890";
    const random = Math.floor(Math.random() * charset.length);
    return charset.charAt(random);
  };

  const updateTemp = () => {
    const newArray = tempArray.map((letter, i) =>
      nameArray[i] !== letter ? genChar() : letter
    );
    setIterator((prevIterator) => prevIterator + 1);
    iterator < 50 ? setTempArray(newArray) : setTempArray(nameArray);
  };

  useEffect(() => {
    if (!loaded) {
      const interval = setInterval(() => {
        updateTemp();
        if (
          JSON.stringify(tempArray) === JSON.stringify(nameArray) ||
          iterator >= 50
        ) {
          clearInterval(interval);
          setTimeout(() => {
            setLoaded(true);
          }, 1000);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [tempArray, nameArray, iterator, loaded]);

  useEffect(() => {
    loadedState(loaded);
  }, [loaded]);

  return (
    <div className="z-0">
      <img
        src="../../bg.png"
        className={`w-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          loaded ? "opacity-0 transition transition-duration-2000" : ""
        }`}
      />
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-blue-600 ${
          loaded ? "opacity-0 transition transition-duration-2000" : ""
        }`}
      >
        {tempArray.map((letter, i) => {
          return i == 3 ? (
            <span key={i}>
              <br />
              <span>{letter}</span>
            </span>
          ) : (
            <span key={i}>{letter}</span>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
