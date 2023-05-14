import { useState, useEffect } from "react";
import axios from "axios";

// const DATABASE = 'https://restcountries.eu/rest/v2/all';
const ENDPOINT = 'https://restcountries.com/v2/all';

export type Country = {
    name: string,
    capital: string,
    languages: {
        name: string
    },
    population: number,
    currency: string
}

const useCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [error, setError] = useState<null|string>(null);
    const fetchCountries = async () => {
        try {
            const result = await axios.get(ENDPOINT);
            // console.log("🚀 ~ file: useCountries.ts:19 ~ fetchCountries ~ result:", result)
            setCountries(result.data as Country[]);
        } catch (error) {
            // console.log("🚀 ~ file: Home.tsx:14 ~ useEffect ~ error:", error)
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