import logo from "../assets/1.jpeg";


const Header = ({children, theme, setTheme}) => {
    return (
        <header className={theme}>
            <span className="logo">
                <img src={logo} alt="" />
                <span>{children}</span>
            </span>
            <span className="themeSelector">
                <span className= "light"></span>
                <span className="medium"></span>
                <span  className="dark"></span>
                <span className="gOne"></span>
                <span className= "gTwo"></span>
                <span className="gThree"></span>
            </span>
        </header>
    );
}

export default Header;
