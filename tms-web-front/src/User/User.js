import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Route from './Routes/Routes';
import './User.css';
const User = (props) =>{

    return(
        <div className="User">
            <Header/>
                <Route/>
            <Footer/>
        </div>
    );

}

export default User