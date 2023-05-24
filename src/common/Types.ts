import { Country } from "../hooks/useCountries"

export interface CountriesResponse {
    data:Country[],
    error: null|string
}