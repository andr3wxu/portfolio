const Logo = () => {
  return (
    <a
      href="https://www.poetryfoundation.org/poems/52757/bermudas-56d2317c9465f"
      target="_blank"
    >
      <img
        src="../../fav.png"
        className="absolute hover:cursor-pointer"
        style={{
          top: "6em",
          left: "13em",
          width: "40em",
          zIndex: "-10",
          opacity: "4%",
        }}
      />
    </a>
  );
};

export default Logo;
