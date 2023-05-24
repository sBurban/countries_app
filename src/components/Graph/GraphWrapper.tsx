import { useState } from "react"
import Graph from './Graph';
import { CountriesResponse } from "../../common/Types";
import './Graph.modules.css'

import { NewButton } from "../Button";

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
                <NewButton id="population" onClick={showPopulation} text="Population" />
                <NewButton id="languages" onClick={showLanguages} text="Languages" />
            </div>
            <h4>10 Most Populated Countries in the World</h4>
            <div className="graphwrapper__graphs">
                <Graph displayGraph={display} countries={data} error={error} />
            </div>
        </div>
    );
}

export default GraphWrapper;