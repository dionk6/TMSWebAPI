import "./About.css";
import AboutBanner from '../../Components/AboutBanner/AboutBanner';
import AboutDescription from '../../Components/AboutDescription/AboutDescription';
//import AboutPhoto from '../../Components/AboutPhoto/AboutPhoto';

const About = ()=> {
    return (
        <div className="AboutPage">
            <AboutBanner/>
            <AboutDescription/>
            {/* <AboutPhoto/> */}
        </div>
    )
}

export default About;