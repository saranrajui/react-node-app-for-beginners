import { NavLink } from "react-router-dom";
import DdMenu from "./DdMenu";
import HomePage from "./HomePage";
import About from "./About";

const TopNav = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about"> About </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/all-news"> All News </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Services
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <DdMenu />
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/search" className="nav-link">Search</NavLink>
                </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>

                </ul>                
            </div>
        </nav>
    )
}

export default TopNav;