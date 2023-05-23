
// import fetchCountries from "../utils/ServiceCountries";
import useCountries from "../hooks/useCountries";
import Header from "./Header";
import Searchbar from "./Searchbar";
import Cardlist from "./Cardlist/Cardlist";
import GraphWrapper from "./Graph/GraphWrapper";
import Footer from "./Footer";

import { useState, useEffect } from "react";

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
    const [filteredCountries, setFilteredCountries] = useState(countries);
    // if(error){
        //     return <div>{error}</div>;
        // }
        // const [searchText, setSearchText] = useState("");
        // const handleTextChange = (text:string) => {
            //     console.log("changed text");
            //     // setSearchText(text);
            //     filterCountriesByText(text);
    // };
    // const onTextChange = ({target, currentTarget}: React.ChangeEvent<HTMLInputElement>) => {
        //     console.log("changed text");
        //     const text = currentTarget.value;
        //     setSearchText(text);
        //     //filterCountriesByText(text);
        // };
        useEffect(() => {
            // console.log("Loaded countries: ");
            // console.log("🚀 ~ file: Home.tsx:48 ~ Home ~ countries:", countries.length)
            // console.log("🚀 ~ file: Home.tsx:25 ~ Home ~ filteredCountries:", filteredCountries.length)
            setFilteredCountries(countries);
    //   return () => {
    //     second
    //   }
    }, [countries.length])




    const filterCountriesByText = (text:string) => {
        // console.log("🚀 ~ file: Home.tsx:54 ~ filterCountriesByText ~ text:", text)

        if(text == "" || text == null || !text){
            setFilteredCountries(countries);
            return ;
        }
        const filteredList = countries.filter(rc => {
            //name,city,languages
            console.log("Entered filter function");

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
        // console.log(filteredList.length);
        //console.log(filteredList);
        setFilteredCountries(filteredList);

    }

    return <>
        <Header countriesCount={countries.length} />
        <Searchbar changeFunction={filterCountriesByText} />
        {/* <Searchbar currentText={searchText} changeFunction={onTextChange} /> */}
        <Cardlist data={countries} error={error} />
        {/* <Cardlist data={filteredCountries} error={error} /> */}
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