const Navbar = () => {
  const nameArray = ["a", "n", "d", "r", "3", "w"];
  return (
    <div className={`fixed w-1/2`}>
      <div
        className={
          "font-extrabold text-6xl p-2.5 pb-3 text-white bg-theme-blue"
        }
      >
        {nameArray.map((letter, i) => {
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

export default Navbar;
