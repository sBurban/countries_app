import { Country } from "../../hooks/useCountries";

import './Card.modules.css';

interface CardProps{
    info: Country,
}

const Card = ({info}:CardProps) => {
    const languages = info.languages?.length > 0? info.languages.map(r => r.name).join(", ") : "";
    const currencies = info.currencies?.length > 0? info.currencies.map(r => r.code).join(", ") : "";

    return (
        <div className="card">
            <div className="card__flag">
                <img src={info.flags.svg} alt={info.name}/>
            </div>
            <p className="card__title">{info.name.toUpperCase()}</p>
            <div className="card__body">
                <p><span className="card__info">Capital:</span>{info.capital}</p>
                <p><span className="card__info">Languages:</span>{languages}</p>
                <p><span className="card__info">Population:</span>{info.population}</p>
                <p><span className="card__info">Currency:</span>{currencies}</p>
            </div>
        </div>
    );
};

export default Card;