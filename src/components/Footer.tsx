import "./footer.css";
import arrowIcon from "../assets/arrow-alt-circle-up-solid.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="copyright">
          <p>Copyright ©2020 30 Days Of React</p>
          <p>
            Join{" "}
            <a href="https://github.com/Asabeneh/30-Days-Of-React">
              30 Days of React challenge
            </a>
          </p>
          <small>
            Designed and Built by
            <a href="https://www.linkedin.com/in/asabeneh/">Asabeneh Yetayeh</a>
          </small>
        </div>

        <div className="credits">
          <p>Recreated functionality on React Hooks + Typescript</p>
          <p>
            + quick attempt at CSS imitating it by <span>Me</span>
          </p>
        </div>

        <div className="arrow">
          <a href="#root">
            <i className="fas fa-arrow-alt-circle-up"></i>
            <img
              src={arrowIcon}
              className="iconArrow"
              alt="Go to Root of page"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
