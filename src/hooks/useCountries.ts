import { useState, useEffect } from "react";
import axios from "axios";

// const DATABASE = 'https://restcountries.eu/rest/v2/all';
const ENDPOINT = 'https://restcountries.com/v2/all';
import { countriesData } from '../data/countries.js'; //Data when site or internet down

type Language = {
    name: string
}

type Currency = {
    code: string
}

export type Country = {
    name: string,
    alpha3Code: string,
    capital: string,
    languages: Language[],
    population: number,
    currencies: Currency[],
    flags: {
        svg: string
    }
}

const useCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [error, setError] = useState<null|string>(null);
    const fetchCountries = async () => {
        try {
            const result = await axios.get(ENDPOINT);
            setCountries(result.data as Country[]);

            //Data when site or internet down
            // const testResult = countriesData;
            // setCountries(testResult as Country[]);

        } catch (error) {
            const errorMsg = (error as Error).message;
            setError(errorMsg);
            setCountries([]);
        }
    };
    useEffect(() => {
        fetchCountries();
    }, []);
    return {
        countries,
        error
    };
};



export default useCountries;