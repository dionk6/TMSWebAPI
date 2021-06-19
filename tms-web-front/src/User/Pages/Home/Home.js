import { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom'
import "./Home.css";
import Card from "../../Components/CardComponent/Card";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import { LeaguesTable } from "../../../http/http-requests";

const Home = (props) => {
  const [leagues, setLeagues] = useState([]);

  const leaguesCall = async () => {
    let leaguesFeedback = await LeaguesTable();
    setLeagues(leaguesFeedback.data);
    console.log(leagues)
  };
  useEffect(() => {
    leaguesCall();
  }, []);

  return (
    <div className="Home">
      <HomeSlider />
      <div className="topLeagues">
        <div className="container">
          <div className="TitleTopLeagues">
            <h1>Top Leagues</h1>
          </div>
          <div className="allLeagues">
            <div className="container">
              <div className="row">
                {leagues.map((league, index) => {
                  if(index < 6){
                    return (
                      <Card id={league.id} image={league.logo} key={index} />
                    );
                  }
                })}
              </div>
            </div>
            <NavLink to='/Leagues' className="homeLeaguesShowMoreBtn">Show More</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
