import { NavLink } from "react-router-dom"
import './NotFound.css';

const NotFound = () =>{
    return(
        <div className="NotFound">
            <h1>Page Not Found this link do not exist !</h1>
            <NavLink to='/'>Go Back To Home Page</NavLink>
        </div>
    );
}

export default NotFound;