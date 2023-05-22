import chartBar from '../assets/chart-bar-solid.svg'
import './Searchbar.css'

const Searchbar = () => {
            //<FontAwesomeIcon icon="fas fa-chart-bar" />
    return (
        <div className="searchbar_container">
            <input type="text" id="searchbar" />
            <div>
                <a href="#stat_section" >
                    <img src={chartBar} className="iconbar" alt="Go to Stat section" />
                </a>
            </div>
        </div>
    );
}

export default Searchbar;