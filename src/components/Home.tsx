
// import fetchCountries from "../utils/ServiceCountries";
import useCountries from "../hooks/useCountries";
import Header from "./Header";
import Searchbar from "./Searchbar";
import Cardlist from "./Cardlist/Cardlist";
import GraphWrapper from "./Graph/GraphWrapper";
import Footer from "./Footer";

import { useState } from "react";

//Lista de requerimientos:
//1 header
//1 searchbar que busque por: name, city, and language
//1 navlink que lleve del principio de la pagina a la zona de Graphs
//1 cardlist component, que reciba la información y retorne la lista de card
//1 card component, que renderize el valor del country en un card
//Graph component, que reciba un string y un number, y regrese el graph
//2 botones, que controlen el state de cual tipo de graph se va a mostrar
//1 footer

const Home = () => {
    const {countries, error} = useCountries();
    // if(error){
    //     return <div>{error}</div>;
    // }

    const [searchText, setSearchText] = useState("");

    const onTextChange = ({target, currentTarget}: React.ChangeEvent<HTMLInputElement>) => {
        console.log("changed text");
        const text = currentTarget.value;
        setSearchText(text);

        //filterCountriesByText(text);

    };

    const filterCountriesByText = (text:string) => {
        const filteredCountries = countries.filter(rc => {
            //name,city,languages
            const searchText = text.toLowerCase();
            if(rc.name && rc.name.toLowerCase().indexOf(searchText) != -1) {
                //console.log("Found by country name");
                return true; //return rc;
            }
            if(rc.capital && rc.capital.toLowerCase().indexOf(searchText) != -1){
                //console.log("Found by country capital");
                return true; //return rc;
            }
            if(rc.languages && rc.languages.length > 0){
                const filterLanguages = rc.languages.filter(rcl => {
                    if(rcl.name.toLowerCase().indexOf(searchText) != -1){
                        return true;//return rcl;
                    }
                })
                if(filterLanguages.length > 0) {
                    //console.log("Found by country's languages");
                    return rc;
                }
            }

            return false;
        });
        console.log(filteredCountries.length);
        //console.log(filteredCountries);
    }

    return <>
        <Header countriesCount={countries.length} />
        <Searchbar currentText={searchText} changeFunction={onTextChange} />
        <Cardlist data={countries} error={error} />
        <GraphWrapper data={countries} error={error} />
        <Footer />
        {/* {!countries?.length && <div>Loading...</div>}
        {countries?.length > 0 &&
            <Cardlist data={countries} error={error} />
        } */}
        {/* {countries?.length > 0 &&
            <div>
                {countries.map((r,i) => <p key={i}>{r.name}</p>)}
            </div>
        } */}
    </>;
};

export default Home;