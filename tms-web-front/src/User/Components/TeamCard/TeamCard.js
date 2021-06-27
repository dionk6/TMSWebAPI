import './TeamCard.css';


const TeamCard = (props) =>{
    console.log(props.team)
    return(
        <div className="TeamCard">
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-lg-4 TeamLogo p-0">
                        <img src={props.team.logo}/>
                    </div>
                    <div className="col-lg-8 bg-white p-3">
                        <div className="row m-0">
                            <div className="col-lg-12 mt-5 text-secondary">
                                <h6>City <span className="Info FontSize"> {props.team.city}</span></h6>
                                <h6>Founded Year <span className="Info FontSize"> {props.team.foundedYear}</span></h6>
                                <h6>Trophies <span className="Info FontSize"> {props.team.trophies}</span></h6>
                                <h6>League <span className="Info FontSize"> {props.team.league}</span></h6>
                                <h6>Stadium <span className="Info FontSize"> {props.team.stadium}</span></h6>
                                <h2 className="Info mt-5">{props.team.name}</h2>
                                <p>{props.team.description}</p>
                            </div>
                        </div>
                        <div className="BuyNowWrapper mb-2">
                            <button>Show Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;