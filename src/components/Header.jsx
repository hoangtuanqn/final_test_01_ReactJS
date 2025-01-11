import logo from "../assets/imgs/logo.png";
import { Link } from "react-router";
const Header = () => {
    return (
        <>
            <header className="header">
                <div className="content">
                    <Link to="/">
                        <img src={logo} alt="" className="logo" />
                    </Link>
                    <nav className="menu">
                        <Link to="/">HomePage</Link>
                        <a href="#!">Investment</a>
                        <a href="#!">Business</a>
                        <a href="#!">Society</a>
                        <a href="#!">About</a>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
