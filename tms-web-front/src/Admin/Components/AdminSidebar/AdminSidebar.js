import {useState,useEffect,useLayoutEffect} from "react";
import { useHistory  } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import TMSLogo from "../../../assets/img/Tms.jpg" 
import { getUser,logout } from "../../../http/http-requests";
// CSS
import './AdminSidebar.css';
const AdminSidebar = (props) =>{
    const [active,setActive]=useState(true);
    const [email,setEmail]=useState("");
    const routerHistory = useHistory();
    
    const toggleSidebarHandler = () =>{
        setActive(active ? "" : "active");
    }
    const resizeHeandler = () =>{
        if(window.innerWidth < 980){
            setActive(false);
        }else{
            setActive(true);
        }
    }

    const GetUser = async (id) =>{
        var email = await getUser(id);
        setEmail(email.data);
    }

    const Logout = async () =>{
        var result = await logout();
     
        if(result.data){
            window.localStorage.removeItem("UserId");
            window.localStorage.removeItem("RoleId");
            routerHistory.push('/Login');
        }
    }

    useLayoutEffect(()=>{
        window.addEventListener('resize',resizeHeandler);
        return (()=>{
            window.removeEventListener('resize',resizeHeandler);
        })
    });

    useEffect(()=>{
        var userId = window.localStorage.getItem("UserId");
        GetUser(userId);
        resizeHeandler();
    },[email]);

    return(
        <aside className={active ? "" : "active"}>
            <div className="asideTranslate">
                <div className="asideLogo">
                    <NavLink to="/">
                        <img src={TMSLogo} alt="Logo"/>
                    </NavLink>
                </div>
                <h5 className="text-white p-3">Hi, {email}</h5>
                <nav>
                    <ul>
                        <li><NavLink exact to="/Admin">Leagues</NavLink></li>
                        <li><NavLink to="/Admin/Players">Players</NavLink></li>
                        <li><NavLink to="/Admin/Stadiums">Stadiums</NavLink></li>
                        <li><NavLink to="/Admin/Teams">Teams</NavLink></li>
                        <li><NavLink to="/Admin/Orders">Orders</NavLink></li>
                    </ul>
                </nav>
                <div className="logoutButtonWrapper text-white text-center mt-5">
                    <button onClick={()=>{Logout()}}>Logout</button>
                </div>
            </div>
            <div className={`asideToggleButton ${active ? "active" : ""}`} onClick={toggleSidebarHandler}>
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