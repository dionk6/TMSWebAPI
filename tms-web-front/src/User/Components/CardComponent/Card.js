import './Card.css';
import {NavLink} from 'react-router-dom'

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
                    <NavLink to={`/LeagueDetail/${props.id}`} id={props.id}>View Details</NavLink>
                </div>
            </div>

        </div>
    );     
            
}

export default Card;