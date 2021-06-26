import { useEffect, useState } from 'react';
import './Leagues.css';
import Card from '../../Components/CardComponent/Card';
import LeaguesBanner from '../../Components/LeaguesBanner/LeaguesBanner';
import { LeaguesTable } from "../../../http/http-requests";


const Leagues = (props) =>{
    const [leagues, setLeagues] = useState([]);

    const leaguesCall = async () => {
      let leaguesFeedback = await LeaguesTable();
      setLeagues(leaguesFeedback.data);
      console.log(leagues)
    };
    useEffect(() => {
      leaguesCall();
    }, []);
    
    return(
        <div className="Leagues">
            <div className="topHeader">
                <LeaguesBanner />
            </div>
            <div className="container">
                <div className="row">
                    <div className="infoLeagues">
                        <div className="titleLeagues">
                            <h1>All Leagues</h1>
                        </div>
                        <div className="container">
                            <div className="row">
                            {leagues.map((league, index) => {
                                return (
                                    <Card league={league} key={index} />
                                );
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leagues;