import "./HomePlayerCard.css";
import shirt from "../../Images/shirt.png";
import {NavLink} from 'react-router-dom'

const HomePlayerCard = (props) => {
    const userId = window.localStorage.getItem("UserId");
    return (
        <div className="homePlayerCard col-lg-3 mb-5">
            <div className="col-lg-12 text-center" style={{ background: "rgba(0,0,0,0.4)",border: "3px solid #45b4b4",borderRadius: "8px" }}>
                <img className="img-fluid" style={{minHeight: "400px",objectFit: "contain",objectPosition: "bottom"}} src={props.player.photo} />
            </div>
            <div className="col-lg-12 row m-0 mt-2 p-3 playerText">
                <div className="col-10 text-white playerFont">
                    <strong>{props.player.firstName} {props.player.lastName} </strong>
                </div>
                <div className="col-2 d-flex justify-content-end align-items-center text-white playerNumber playerFont">
                    <img width="20" src={shirt} /> <span style={{ marginLeft: "5px" }}>{props.player.playerNo}</span>
                </div>
            </div>
            <div className="col-lg-12 row m-0 mt-2 p-3 playerText">
                <div className="col-7 buyKit playerFont">
                {userId ? <NavLink className="btn" to={`/Product/${props.player.id}`}>Buy Shirt</NavLink> : <NavLink className="btn" to="/Login">Buy Shirt</NavLink>}
                </div>
                <div className="col-5 playerNumber playerFont text-danger">
                    {props.player.price} €
                </div>
            </div>
        </div>
    )
}

export default HomePlayerCard;