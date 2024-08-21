import { useState, useEffect } from "react";

type LoadedStateFunction = () => void;
interface Props {
  loadedState: LoadedStateFunction;
}

const TitleCard = ({ loadedState }: Props) => {
  const nameArray = ["a", "n", "d", "r", "3", "w"];
  const [loaded, setLoaded] = useState(false);
  const [iterator, setIterator] = useState(0);
  const [tempArray, setTempArray] = useState(["*", " ", "*", " ", "*", " "]);

  const genChar = () => {
    const charset = "abcdefiklmnrstvwxz3780!#$%*";
    const random = Math.floor(Math.random() * charset.length);
    return charset.charAt(random);
  };

  const updateTemp = () => {
    const newTempArray = tempArray.map((letter, index) =>
      nameArray[index] !== letter || iterator < 20 ? genChar() : letter,
    );
    setIterator((prevIterator) => prevIterator + 1);
    setTempArray(iterator < 50 ? newTempArray : nameArray);
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
            loadedState();
          }, 1000);
        }
      }, iterator * 2);
      return () => clearInterval(interval);
    }
  }, [tempArray, nameArray, iterator, loaded]);

  return (
    <>
      <div
        className={`${loaded ? "opacity-0 transition duration-300" : ""} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold text-6xl p-2.5 pb-3 text-theme-off-white bg-theme-blue dark:text-theme-blue dark:bg-theme-off-white`}
      >
        {tempArray.map((letter, index) => {
          return index == 3 ? (
            <span key={index}>
              <br />
              <span>{letter}</span>
            </span>
          ) : (
            <span key={index}>{letter}</span>
          );
        })}
      </div>
    </>
  );
};

export default TitleCard;
