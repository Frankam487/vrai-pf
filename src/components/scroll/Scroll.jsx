import "./scroll.css";

const Scroll = () => {
  window.addEventListener("scroll", function() {
    const scrollUp = document.querySelector(".scroll");
    if (this.scrollY >= 560) scroll.classList.add("show-scroll");
    else {
      scrollUp.classList.remove("show-scroll");
    }
  });
  return (
    <a href="#" className="scroll">
      <i className="ui uil-arrow-up scroll__icon"></i>
    </a>
  );
};

export default Scroll;
