const Subtitle = () => {
  return (
    <section>
      <section className="font-normal text-sm p-5 mt-custom-p-top">
        <p className={`p-5 leading-5`}>
          Currently <span className={`font-semibold`}>SDE</span> at{" "}
          <a
            href={"https://www.viridiengroup.com"}
            target="_blank"
            className={`font-slab text-custom-a font-semibold hover:bg-theme-blue hover:text-theme-off-white dark:hover:bg-theme-off-white dark:hover:text-theme-blue transition duration-200`}
          >
            <span className={`font-mono font-light`}>[</span>Viridien
            <span className={`font-mono font-light`}>]</span>
          </a>
          . Check out my projects on{" "}
          <a
            href={"https://github.com/andr3wxu"}
            target="_blank"
            className={`font-slab text-custom-a font-semibold hover:bg-theme-blue hover:text-theme-off-white dark:hover:bg-theme-off-white dark:hover:text-theme-blue transition duration-200`}
          >
            <span className={`font-mono font-light`}>[</span>GitHub
            <span className={`font-mono font-light`}>]</span>
          </a>{" "}
          or my{" "}
          <a
            href={"./resume-andrew.pdf"}
            target="_blank"
            className={`font-slab text-custom-a font-semibold hover:bg-theme-blue hover:text-theme-off-white dark:hover:bg-theme-off-white dark:hover:text-theme-blue transition duration-200`}
          >
            <span className={`font-mono font-light`}>[</span>Resume
            <span className={`font-mono font-light`}>]</span>
          </a>
          !
        </p>
      </section>
    </section>
  );
};

export default Subtitle;
