
// import fetchCountries from "../utils/ServiceCountries";
import useCountries from "../hooks/useCountries";

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

    if(error){
        return <div>{error}</div>;
    }


    return <>
        {!countries?.length && <div>Loading...</div>}
        {countries?.length > 0 &&
            <div>
                {countries.map((r,i) => <p key={i}>{r.name}</p>)}
            </div>
        }
    </>;
};

export default Home;