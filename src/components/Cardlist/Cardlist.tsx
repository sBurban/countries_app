import Card from "./Card";
import './Card.modules.css';

import { CountriesResponse } from "../../common/Types";


const Cardlist = ({data, error}:CountriesResponse) => {

    if(error){
        return <div>{error}</div>;
    }

    const cardsAr:React.ReactElement[] = [];
    data.forEach((elem,i) => {
        cardsAr.push(<Card key={i} info={elem}  />);
    });

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