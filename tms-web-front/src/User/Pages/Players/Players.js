import "./Players.css";
import PlayerCard from "../../Components/PlayerCard/PlayerCard";
import PlayerBanner from "../../Components/PlayerBanner/PlayerBanner"

const Players = () => {
    return (
        <div className="PlayersPage">
            <div className="mb-5">
                <PlayerBanner/>
            </div>
                <PlayerCard/>
        </div>
    );
}

export default Players;