import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import TMSLogo from "../../Images/Tms.jpg";

const Header = (props) => {
  const [active, setActive] = useState(false);

  const toggleHeaderButton = () => {
    setActive(!active);
  };

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="headerInner">
            <div className="logoHeader">
              <NavLink to="/" exact>
                <img src={TMSLogo} alt="Logo" />
              </NavLink>
            </div>
            <nav className={`headersLinks ${active ? "active" : ""}`}>
              <ul>
                <li className="navItem">
                  <NavLink to="/" exact>
                    Home
                  </NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/Leagues">Leagues</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/Teams">Teams</NavLink>
                </li>
                <li>
                  <NavLink to="/Players" exact>
                    Players
                  </NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/About" exact>
                    About
                  </NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/Contact" exact>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div
              className={`toggleButtonDiv ${active ? "active" : ""}`}
              onClick={toggleHeaderButton}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
