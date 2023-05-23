// import { CountriesResponse } from "../../common/Types";
import { Country } from "../../hooks/useCountries";
import './Graph.modules.css'

interface GraphProps {
    displayGraph: string,
    countries:Country[],
    error: null|string
    // data: keyof CountriesResponse,
    // error: keyof CountriesResponse
}

type ReducerResult = Record<string, number>;

type GraphP = Pick<GraphProps,"countries">;


const Graph = ({displayGraph, countries, error}:GraphProps) => {

    if(error){
        return <div>{error}</div>
    }

    return (
        <div className="graphwrapper__graphs__wrapper">
            {displayGraph === "population"?
                <PopulationGraph countries={countries}  />
                : <LanguagesGraph countries={countries} />
            }
        </div>
    );
}


const PopulationGraph = ({countries}:GraphP) => {
    // let worldPopulation = 0;
    const mostPopulated = countries.sort((a,b) => {
        // worldPopulation += b.population;
        return b.population-a.population;
    }).slice(0,10);

    const worldPopulation = countries.reduce(
        (accumulator, currentValue) => {
            return accumulator + currentValue.population;
        },
        0
    );
    // console.log("🚀 ~ file: Graph.tsx:22 ~ Graph ~ mostPopulated:", mostPopulated)
    // console.log("🚀 ~ file: Graph.tsx:22 ~ Graph ~ worldPopulation:", worldPopulation)

    return (
        <div className="bars__wrapper">
            <div key={0} className="bars">
                <p className="bars__title">{"World"}</p>
                <div className="bar"></div>
                <p className="bars__value">{worldPopulation}</p>
            </div>
            {mostPopulated.map((r,i) => {

                const calcWidth = Math.round((r.population / worldPopulation)*100);

                return <div key={i} className="bars"  >
                    <p className="bars__title">{r.name.length >10? r.alpha3Code : r.name}</p>
                    <div className="bar" style={{width: `${calcWidth}%`}} ></div>
                    <p className="bars__value">{r.population}</p>
                </div>;
            })}
        </div>
    )
};

const LanguagesGraph = ({countries}:GraphP) => {
    const initialValue:ReducerResult = {};
    const languagesCounterObj = countries.reduce<ReducerResult>(
        (accumulator, currentValue) => {
            // return accumulator + currentValue;
            currentValue.languages.map((r) => {
                if(!accumulator[r.name]){
                    accumulator[r.name] = 0;
                }
                accumulator[r.name] +=1;
                return r.name;
            });
            return accumulator;
        },
        initialValue
    );
    // console.log("🚀 ~ file: Graph.tsx:39 ~ Graph ~ languagesCounterObj:", languagesCounterObj)
    //Returns array of Language/Number
    const languages = Object.entries(languagesCounterObj).sort((a,b) => b[1]-a[1]).slice(0,10);
    // console.log("🚀 ~ file: Graph.tsx:42 ~ Graph ~ languagesArray:", languagesArray)

    return (
    <div className="bars__wrapper">
        {languages.map((r,i) => {
            return <div key={i} className="bars"  >
                <p className="bars__title">{r[0]}</p>
                <div className="bar" style={{width: `${r[1]}%`}} ></div>
                <p className="bars__value">{r[1]}</p>
            </div>;
        })}
    </div>
    );
}

export default Graph;