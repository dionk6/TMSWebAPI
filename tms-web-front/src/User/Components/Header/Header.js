import {useState} from "react";
import './Header.css';
import TMSLogo from "../../Images/TMSLogo.png";
 
const Header = (props) =>{
    const [active,setActive]=useState(false);

    const toggleHeaderButton = () =>{
        setActive(!active);
    }

    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="headerInner">
                        <div className="logoHeader col-md-4 col-sm-2">
                            <a>
                                <img src={TMSLogo} alt="Logo"/>
                            </a>
                        </div>
                        <nav className={`headersLinks ${active ? "active" : ""}`}>
                            <ul>
                                <li className="navItem">
                                    <a>Home</a>
                                </li>
                                <li className="navItem">
                                    <a>Leagues</a>
                                </li>
                                <li className="navItem">
                                    <a>About</a>
                                </li>
                                <li className="navItem">
                                    <a>Contact</a>
                                </li>    
                            </ul>    
                        </nav>
                        <div className={`toggleButtonDiv ${active ? "active" : ""}`} onClick={toggleHeaderButton}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );

}

export default Header;