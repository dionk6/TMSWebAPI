import "./PlayerCard.css";
import {NavLink} from 'react-router-dom'

const PlayerCard = (props) => {
    const userId = window.localStorage.getItem("UserId");
    return (
        <div className="PlayerCardPage">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-4 PlayerImg">
                        <img src={props.player.photo}/>
                    </div>
                    <div className="col-lg-8 PlayerInfo p-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-10 mt-5 text-secondary">
                                        <h6>Name <span className="text-white FontSize"> {props.player.firstName +" "+ props.player.lastName}</span></h6>
                                        <h6>Postion <span className="text-white FontSize"> {props.player.position}</span></h6>
                                        <h6>Age <span className="text-white FontSize"> {props.player.age}</span></h6>
                                    </div>
                                    <div className="col-lg-2 mt-5">
                                        <h3 className="Kit">{props.player.playerNo}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <h3 className="Red">INFORMATION</h3>
                            <p>
                                {props.player.bio}
                            </p>
                        </div>
                        <div className="col-lg-12">
                            <h3 className="Red">TEAM</h3>
                            <p>
                                {props.player.team}
                            </p>
                        </div>
                        <div className="BuyNowWrapper">
                            {userId ? <NavLink className="btn" to={`/Product/${props.player.id}`}>Buy Shirt</NavLink> : <NavLink className="btn" to="/Login">Buy Shirt</NavLink>}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;