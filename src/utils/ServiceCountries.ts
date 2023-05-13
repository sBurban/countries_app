import axios from "axios";

const DATABASE = 'https://restcountries.eu/rest/v2/all';

const fetchCountries = async () => {
    try {
        const result = await axios.get(DATABASE);
        console.log(result);
        return result;
    } catch (error) {
        console.log("🚀 ~ file: Home.tsx:14 ~ useEffect ~ error:", error)
    }
    return {};
};

export default fetchCountries;