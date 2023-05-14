import { Country } from "../../hooks/useCountries";

interface CardProps{
    info: Country,
}

const Card = ({info}:CardProps) => {
// const Card = ({name, capital, languages, population, currency, flags}:CardProps["info"]) => {
    const languages = info.languages?.length > 0? info.languages.map(r => r.name).join(", ") : "";
    const currencies = info.currencies?.length > 0? info.currencies.map(r => r.code).join(", ") : "";

    return (
        <div className="card">
            <div className="card__flag">
                <img src={info.flags.svg} />
            </div>
            <div className="card__body">
                <p className="card__title">{info.name}</p>
                <p><span className="card__info">Capital:</span>{info.capital}</p>
                <p><span className="card__info">Languages:</span>{languages}</p>
                <p><span className="card__info">Population:</span>{info.population}</p>
                <p><span className="card__info">Currency:</span>{currencies}</p>
            </div>
        </div>
    );
};

export default Card;