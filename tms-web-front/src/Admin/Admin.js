
import AdminSidebar from './Components/AdminSidebar/AdminSidebar';
import Routes from './Routes/Routes';

// Css
import './Admin.css'
const Admin = (props) =>{
    const userId = window.localStorage.getItem("UserId");
    const roleId = window.localStorage.getItem("RoleId");
    if(userId == null){
        window.location.href = "/Login";
    }else if(roleId == "2"){
        window.location.href = "/";
    }
    return(
        <div className="Admin">
            <AdminSidebar/>
            <Routes/>
        </div>
    );

}

export default Admin