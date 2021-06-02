import './Card.css';
import TMSLogo from "../../Images/TMSLogo.png";

const Card = (props)=>{
    return(           
        <div className="cardLeague">
            <div className="cardImage">
                <img src={TMSLogo} alt="Logo"/>
            </div>
            <div className="infoCard">
                <h4>Premier League</h4>
                <p>Manchester City</p>
            </div>
            <div className="footerCard">
                <h4>211</h4>
            </div>
        </div>
    );     
            
}

export default Card;