import './LeaguesBanner.css';
import innerpageBg from "../../../assets/img/innerpageBg.jpg";

const LeaguesBanner = (props) =>{
    return(
        <div className="LeaguesBanner">
            <div className="headerImage">
                <img src={innerpageBg} alt="headerImage"/>
                <div className="headerInfo">
                    <h1>Some info</h1>
                </div>
            </div>
        </div>
    );
};

export default LeaguesBanner;