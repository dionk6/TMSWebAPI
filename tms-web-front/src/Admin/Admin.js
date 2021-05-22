
import AdminSidebar from './Components/AdminSidebar/AdminSidebar';
import Routes from './Routes/Routes';

// Css
import './Admin.css'
const Admin = (props) =>{

    return(
        <div className="Admin">
            <AdminSidebar/>
            <Routes/>
        </div>
    );

}

export default Admin