import './Card.css';
import TMSLogo from "../../Images/TMSLogo.png";

const Card = (props)=>{
    return(           
        <div className="cardLeague">
            <div className="row">
                <div className="col-lg-3 d-flex justify-content-center">
                    <div className="leagueCard shadow-lg mb-5 bg-white">
                        <div className="Title">
                            <h3>Premier League</h3>
                        </div>
                        <div >
                            <img src={TMSLogo} />
                        </div>
                        <div className="footerleagueCard">
                            <div className="row">
                                <div className="col-md-6 p-2">
                                    Max.Teams: 20
                                </div>
                                <div className="col-md-6 p-2">
                                    State: England
                                </div>
                            </div>    
                        </div>
                    </div>   
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                    <div className="leagueCard shadow-lg mb-5 bg-white rounded">
                        <div className="Title">
                            <h3>Seria A</h3>
                        </div>
                        <div >
                            <img src={TMSLogo} />
                        </div>
                        <div className="footerleagueCard">
                            <div className="row">
                                <div className="col-md-6 p-2">
                                    Max.Teams: 20
                                </div>
                                <div className="col-md-6 p-2">
                                    State: Italy
                                </div>
                            </div>    
                        </div>
                    </div>   
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                    <div className="leagueCard shadow-lg mb-5 bg-white rounded">
                        <div className="Title">
                            <h3>La Liga</h3>
                        </div>
                        <div >
                            <img src={TMSLogo} />
                        </div>
                        <div className="footerleagueCard">
                            <div className="row">
                                <div className="col-md-6 p-2">
                                    Max.Teams: 20
                                </div>
                                <div className="col-md-6 p-2">
                                    State: Spain
                                </div>
                            </div>    
                        </div>
                    </div>   
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                    <div className="leagueCard shadow-lg mb-5 bg-white rounded">
                        <div className="Title">
                            <h3>Ligue 1</h3>
                        </div>
                        <div >
                            <img src={TMSLogo} />
                        </div>
                        <div className="footerleagueCard">
                            <div className="row">
                                <div className="col-md-6 p-2">
                                    Max.Teams: 20
                                </div>
                                <div className="col-md-6 p-2">
                                    State: France
                                </div>
                            </div>    
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );     
            
}

export default Card;