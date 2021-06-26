import "./HomePlayerCard.css";
import shirt from "../../Images/shirt.png";

const HomePlayerCard = (props) => {
    return (
        <div className="col-lg-3 mb-5">
            <div className="col-lg-12 text-center" style={{ background: "rgba(0,0,0,0.4)",border: "3px solid #45b4b4",borderRadius: "8px" }}>
                <img className="img-fluid" src={props.player.photo} />
            </div>
            <div className="col-lg-12 row m-0 mt-2 p-3 playerText">
                <div className="col-8 text-white playerFont">
                    <strong>{props.player.firstName} {props.player.lastName} </strong>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center text-white playerNumber playerFont">
                    <img width="20" src={shirt} /> <span style={{ marginLeft: "5px" }}>{props.player.playerNo}</span>
                </div>
            </div>
            <div className="col-lg-12 row m-0 mt-2 p-3 playerText">
                <div className="col-8 buyKit playerFont">
                    <a>Buy now</a>
                </div>
                <div className="col-4 playerNumber playerFont text-danger">
                    {props.player.price} €
                </div>
            </div>
        </div>
    )
}

export default HomePlayerCard;