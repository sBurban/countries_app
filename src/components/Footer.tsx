import { Country } from "../hooks/useCountries"
import './footer.css'

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__wrapper">


                <div className="credits">
                    <p>Recreated functionality on React Hooks + Typescript</p>
                    <p>+ quick attempt at CSS imitating it by <span>Me</span></p>
                </div>

                <div className="arrow">
                    <a href="#root"><i className="fas fa-arrow-alt-circle-up"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;