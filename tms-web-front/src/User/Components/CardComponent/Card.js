import './Card.css';
import TMSLogo from "../../Images/TMSLogo.png";

const Card = (props)=>{
    return(           
        <div className="col-lg-4 mb-5">

            <div className="cardLeague">
                <div className="cardLeagueHeader">
                    <h3>Premier League</h3>
                </div>
                <div className="cardLeagueImage">
                    <img src={props.image} />
                </div>
                <div className="cardLeagueFooter">
                    <button id={props.id}>View Details</button>
                </div>
            </div>

        </div>
    );     
            
}

export default Card;