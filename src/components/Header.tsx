import './Header.css'

type HeaderProps = {
    countriesCount: number,
}

const Header = ({countriesCount}:HeaderProps) => {
    return <div className="header">
        <h1>World Countries Data</h1>
        <h2>Currently, we have {countriesCount} countries</h2>
    </div>
};

export default Header;