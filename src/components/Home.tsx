
// import fetchCountries from "../utils/ServiceCountries";
import useCountries from "../hooks/useCountries";
import Header from "./Header";
import Searchbar from "./Searchbar";
import Cardlist from "./Cardlist/Cardlist";
import GraphWrapper from "./Graph/GraphWrapper";
import Footer from "./Footer";

import { useState, useEffect } from "react";
import { useDebouncedCallback } from 'use-debounce';

const Home = () => {
    const {countries, error} = useCountries();
    const [filteredCountries, setFilteredCountries] = useState(countries);

    useEffect(() => {
        setFilteredCountries(countries);
    }, [countries.length])


    const filterCountriesByText = useDebouncedCallback(
        // function
        (text:string) => {
            console.log("Entered filter function");
            if(text == "" || text == null || !text){
                setFilteredCountries(countries);
                return ;
            }
            const filteredList = countries.filter(rc => {
                //name,city,languages
                const searchText = text.toLowerCase();
                if(rc.name && rc.name.toLowerCase().indexOf(searchText) != -1) {
                    return true;
                }
                if(rc.capital && rc.capital.toLowerCase().indexOf(searchText) != -1){
                    return true;
                }
                if(rc.languages && rc.languages.length > 0){
                    const filterLanguages = rc.languages.filter(rcl => {
                        if(rcl.name.toLowerCase().indexOf(searchText) != -1){
                            return true;
                        }
                    })
                    if(filterLanguages.length > 0) {
                        return rc;
                    }
                }
                return false;
            });
            setFilteredCountries(filteredList);
        },
        // delay in ms
        1000
    );

    return <>
        <Header countriesCount={countries.length} />
        <Searchbar changeFunction={filterCountriesByText} />
        <Cardlist data={filteredCountries} error={error} />
        <GraphWrapper data={countries} error={error} />
        <Footer />
    </>;
};

export default Home;