import { useEffect, useState } from "react";
import './Teams.css';
import TeamCard  from '../../Components/TeamCard/TeamCard';
import TeamsBanner from '../../Components/TeamsBanner/TeamsBanner';
import {TeamsTable} from "../../../http/http-requests";

const Teams = () =>{
    const [Teams, setTeams] = useState([]);
    const getTeams = async () => {
        const allTeams = await TeamsTable();
        setTeams(allTeams.data);
    }
    useEffect(() => {
        getTeams();
    },[])
    return (
        <div className="TeamsPage">
            <div className="mb-5">
                <TeamsBanner/>
            </div>
                {
                    Teams.map((team, key)=> { 
                        return <TeamCard team = {team} key = {key}/>
                    })
                }
        </div>
    );
}   

export default Teams;