import { useEffect, useState } from "react";
import "./Players.css";
import PlayerCard from "../../Components/PlayerCard/PlayerCard";
import PlayerBanner from "../../Components/PlayerBanner/PlayerBanner";
import {playersHttpRequestTable} from "../../../http/http-requests";

const Players = () => {
    const [Players,setPlayers] = useState([]);
    const getPlayers = async () => {
        const allPlayers = await playersHttpRequestTable();
        setPlayers(allPlayers.data);
    }
    useEffect(() => {
        getPlayers();
    },[])
    return (
        <div className="PlayersPage">
            <div className="mb-5">
                <PlayerBanner/>
            </div>
                {
                    Players.map((player, key)=> { 
                        return <PlayerCard player = {player} key = {key}/>
                    })
                }
        </div>
    );
}

export default Players;