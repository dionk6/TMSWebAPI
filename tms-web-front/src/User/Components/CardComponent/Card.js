import './Card.css';
import {NavLink} from 'react-router-dom'

const Card = (props)=>{
    return(           
        <div className="Card col-lg-4 mb-5">
            <div style={{background: "#f2f2f2"}} className="text-center p-5">
                <img height="200" src={props.league.logo} />
            </div>
            <div className="p-3 leagueDetails">
                <div className="col-lg-12 text-white leagueTitle">
                    {props.league.name}
                </div>
                <div className="col-lg-12 firstDescription">
                    {props.league.country}, {props.league.currentChampion}
                </div>
                <div className="col-lg-12 pt-3 pb-3 leagueDescription text-secondary">
                    {props.league.description.substring(0,150)}
                </div>
            </div>
            <div className="col-lg-12 row m-0 lastDetails">
                <div className="col-lg-6 leagueDate d-flex align-items-center text-white">
                    Founded Year: {props.league.foundedYear}
                </div>
                <div className="col-lg-6 leagueButton">
                    <NavLink className="btn" to={`/Leagues/${props.league.id}`} id={props.league.id}>View Details</NavLink>
                </div>
            </div>
        </div>
    );     
            
}

export default Card;