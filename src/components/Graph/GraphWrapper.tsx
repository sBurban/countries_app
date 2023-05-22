// import { Country } from "../../hooks/useCountries"
import { useState } from "react"
import Graph from './Graph';
import { CountriesResponse } from "../../common/Types";
import './Graph.modules.css'

// interface GraphProps {
//     data:Country[],
//     error: null|string
// }

const GraphWrapper = ({data, error}:CountriesResponse) => {
    const [display, setDisplay] = useState("population");

    const showPopulation = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setDisplay('population');
    }
    const showLanguages = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setDisplay('languages');
    }

    return (
        <div id="stat_section" className="graphwrapper">
            <div className="graphwrapper__ui">
                <button id="population" onClick={(e) => showPopulation(e)} >Population</button>
                <button id="languages" onClick={(e) => showLanguages(e)} >Languages</button>
            </div>
            <h4>10 Most Populated Countries in the World</h4>
            <div className="graphwrapper__graphs">
                <Graph displayGraph={display} countries={data} error={error} />
            </div>
        </div>
    );
}

export default GraphWrapper;