import { useHistory  } from 'react-router-dom'
import AdminSidebar from './Components/AdminSidebar/AdminSidebar';
import Routes from './Routes/Routes';

// Css
import './Admin.css'
const Admin = (props) =>{
    const routerHistory = useHistory();
    const userId = window.localStorage.getItem("UserId");
    const roleId = window.localStorage.getItem("RoleId");
    if(userId === null){
        routerHistory.push('/Login')
    }else if(roleId === "2"){
        routerHistory.push('/')
    }
    return(
        <div className="Admin">
            <AdminSidebar/>
            <Routes/>
        </div>
    );

}

export default Admin