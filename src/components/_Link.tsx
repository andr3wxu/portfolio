interface Props {
  light: boolean;
  text: string;
  size: string;
  link: string;
}

const Link = ({ light, size }: Props) => {
  const l =
    "hover:text-white hover:bg-theme-blue hover:cursor-pointer bg-white border-theme-blue text-theme-blue";
  const d =
    "text-white bg-theme-blue hover:cursor-pointer hover:bg-white hover:border-theme-blue hover:text-theme-blue";

  return (
    <div
      className={`font-extrabold text-${size} p-2 leading-5 transition ${light ? l : d}`}
    ></div>
  );
};

export default Link;
