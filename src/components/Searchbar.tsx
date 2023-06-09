import { useState } from 'react';
import chartBar from '../assets/chart-bar-solid.svg'
import './Searchbar.css'

type SearchbarProps = {
    changeFunction: (text:string) => void,
}

const Searchbar = ({changeFunction}:SearchbarProps) => {

    const [searchText, setSearchText] = useState("");

    const onTextChange = ({target, currentTarget}: React.ChangeEvent<HTMLInputElement>) => {
        const text = currentTarget.value;
        setSearchText(text);
        changeFunction(text);
    };

    return (
        <div className="searchbar_container">
            <input type="text" id="searchbar" placeholder="Search countries by name, city and languages"
                onChange={onTextChange}
                value={searchText}
            />
            <div>
                <a href="#stat_section" >
                    <img src={chartBar} className="iconbar" alt="Go to Stat section" />
                </a>
            </div>
        </div>
    );
}

export default Searchbar;