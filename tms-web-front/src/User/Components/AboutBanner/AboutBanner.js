import "./AboutBanner.css";
import AboutUs from '../../Images/AboutBanner.png';

const AboutBanner = ()=>{
    return (
        <div className="AboutBanner">
            <div className="container-fluid imgcontainer">
                <div className="row m-0">
                    <div className="col-12 p-0">
                        <img src={AboutUs}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBanner;