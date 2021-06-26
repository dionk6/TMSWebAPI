import "./PlayerCard.css";
import Ibra from "../../Images/ibra.png"

const PlayerCard = () => {
    return (
        <div className="PlayerCardPage ">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-4 PlayerImg">
                        <img src={Ibra}/>
                    </div>
                    <div className="col-lg-8 PlayerInfo p-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-10 mt-5 text-secondary">
                                        <h6>Name <span className="text-white FontSize"> ZLATAN IBRAHIMOVIC</span></h6>
                                        <h6>Postion <span className="text-white FontSize"> ATTACKER</span></h6>
                                        <h6>Age <span className="text-white FontSize"> 39</span></h6>
                                    </div>
                                    <div className="col-lg-2 mt-5">
                                        <h3 className="Kit">10</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <h3 className="Red">INFORMATION</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dicta iure atque dolorem voluptate quasi maxime, repellat aliquid eos. Beatae molestias itaque aspernatur quaerat culpa laudantium ducimus est eveniet. Repudiandae!lorem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dicta iure atque dolorem voluptate quasi maxime, repellat aliquid eos. Beatae molestias itaque aspernatur quaerat culpa laudantium ducimus est eveniet. Repudiandae!lorem.<br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dicta iure atque dolorem voluptate quasi maxime, repellat aliquid eos. He made his debut for France in October 2011 and featured in four of Les Bleus' five games at the 2014 World Cup.
                            </p>
                        </div>
                        <div className="col-lg-12">
                            <h3 className="Red">TEAM</h3>
                            <p>
                            Lorem ipsum dolor sit amet,<br/>
                            Lorem ipsum dolor sit amet,<br/>
                            Lorem ipsum dolor sit amet,<br/>
                            </p>
                        </div>
                        <div className="BuyNowWrapper">
                            <button>Buy Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;