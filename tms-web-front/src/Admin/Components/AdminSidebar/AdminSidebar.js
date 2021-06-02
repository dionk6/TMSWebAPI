import {useState} from "react"
import { NavLink } from "react-router-dom";
import TMSLogo from "../../../assets/img/TMSLogo.png" 
// CSS
import './AdminSidebar.css';
const AdminSidebar = (props) =>{
    const [active,setActive]=useState(true);
    
    const toggleSidebarHandler = () =>{
        setActive(active ? "" : "active");
    }

    return(
        <aside className={active ? "" : "active"}>
            <div className="asideTranslate">
                <div className="asideLogo">
                    <NavLink to="/">
                        <img src={TMSLogo} alt="Logo"/>
                    </NavLink>
                </div>
                <nav>
                    <ul>
                        <li><NavLink exact to="/Admin">Leagues</NavLink></li>
                        <li><NavLink to="/Admin/Players">Players</NavLink></li>
                        <li><NavLink to="/Admin/Stadiums">Stadiums</NavLink></li>
                        <li><NavLink to="/Admin/Teams">Teams</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className={`asideToggleButton ${active ? "" : "active"}`} onClick={toggleSidebarHandler}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    enableBackground="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    >
                    <path d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0zm79.083 271.083L228.416 377.749A21.275 21.275 0 01213.333 384a21.277 21.277 0 01-15.083-6.251c-8.341-8.341-8.341-21.824 0-30.165L289.835 256l-91.584-91.584c-8.341-8.341-8.341-21.824 0-30.165s21.824-8.341 30.165 0l106.667 106.667c8.341 8.341 8.341 21.823 0 30.165z"></path>
                </svg>
            </div>
        </aside>
    );

}

export default AdminSidebar