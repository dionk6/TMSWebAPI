import './TeamCard.css';
import acmilan from "../../Images/acmilan.png"


const TeamCard = () =>{
    return(
        <div className="TeamCard">
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-lg-4 TeamLogo p-0">
                        <img src={acmilan}/>
                    </div>
                    <div className="col-lg-8 bg-white p-3">
                        <div className="row m-0">
                            <div className="col-lg-12 mt-5 text-secondary">
                                <h2 className="Info">AC MILAN</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam unde veniam rerum rem voluptates reprehenderit, ab dicta eaque in? Molestiae maxime, sunt deleniti a accusantium, qui iure perspiciatis. Esse, tempore?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam unde veniam rerum rem voluptates reprehenderit, ab dicta eaque in? Molestiae maxime, sunt deleniti a accusantium, qui iure perspiciatis. Esse, tempore?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam unde veniam rerum rem voluptates reprehenderit, ab dicta eaque in? Molestiae maxime, sunt deleniti a accusantium, qui iure perspiciatis. Esse, tempore?lorem.</p>
                                <h6>Stadium <span className="Info FontSize"> SAN SIRO</span></h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam unde veniam rerum rem voluptates reprehenderit,</p>
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