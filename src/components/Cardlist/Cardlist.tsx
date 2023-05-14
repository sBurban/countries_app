import { Country } from "../../hooks/useCountries";
import Card from "./Card";

interface CardlistProps {
    data:Country[],
    error: null|string
}

const Cardlist = ({data, error}:CardlistProps) => {

    if(error){
        return <div>{error}</div>;
    }

    const cardsAr:React.ReactElement[] = [];
    data.forEach((elem,i) => {
        cardsAr.push(<Card key={i} info={elem}  />);
    });

    // return <div className="cardlist_container">
    //     {cardsAr.length}
    // </div>;
    return <>
        {!data?.length && <div>Loading...</div>}
        {data?.length > 0 &&
            <div className="cardlist_container">
                {cardsAr}
            </div>
        }
    </>;
};

export default Cardlist;