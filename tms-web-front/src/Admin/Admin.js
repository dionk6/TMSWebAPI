
import AdminSidebar from './Components/AdminSidebar/AdminSidebar';
import Routes from './Routes/Routes';

// Css
import './Admin.css'
const Admin = (props) =>{
    const userId = window.localStorage.getItem("UserId");
    if(userId == null){
        window.location.href = "/Login";
    }
    return(
        <div className="Admin">
            <AdminSidebar/>
            <Routes/>
        </div>
    );

}

export default Admin