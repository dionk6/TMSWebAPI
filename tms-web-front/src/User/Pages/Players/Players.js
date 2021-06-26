import "./Players.css";
import PlayerCard from "../../Components/PlayerCard/PlayerCard";

const Players = () => {
    return (
        <div className="PlayersPage">
            <div className="PlayerPageBanner">
            <div className="container">
                <div className="row">
                    <div className="PlayerPageTitle">
                        <h1>Players</h1>
                    </div>
                </div>
            </div>
            </div>
            <PlayerCard/>
        </div>
    );
}

export default Players;