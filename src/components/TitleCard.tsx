import { useEffect } from "react";

type LoadedStateFunction = (loaded: boolean) => void;
interface Props {
  loadedState: LoadedStateFunction;
}

const TitleCard = ({ loadedState }: Props) => {
  useEffect(() => {
    console.log(1);
  });
  return (
    <>
      <div className={"font-bold"}>{loadedState.name}</div>
    </>
  );
};

export default TitleCard;
