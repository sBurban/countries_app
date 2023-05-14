import { Country } from "../../hooks/useCountries"

interface FooterProps {
    data:Country[],
    error: null|string
}

const Graphscontainer = ({data, error}:FooterProps) => {

    return (
        <div className="graphs_container">
            <div className="">

            </div>
        </div>
    );
}

export default Graphscontainer;