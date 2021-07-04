import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import "./Home.css";
import Card from "../../Components/CardComponent/Card";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import HomePlayerCard from "../../Components/HomePlayerCard/HomePlayerCard";
import { LeaguesTable,playersHttpRequestTable } from "../../../http/http-requests";

const Home = (props) => {
  const [leagues, setLeagues] = useState([]);
  const [players, setPlayers] = useState([]);

  const leaguesCall = async () => {
    let leaguesFeedback = await LeaguesTable();
    setLeagues(leaguesFeedback.data);
  };

  const playersCall = async () => {
    let allPlayers = await playersHttpRequestTable();
    setPlayers(allPlayers.data);
  };

  useEffect(() => {
    leaguesCall();
    playersCall();
  }, []);

  return (
    <div className="Home">
      <HomeSlider />
      <div className="topLeagues">
        <div className="container">
          <div className="TitleTopLeagues text-white">
            <h1>Top Leagues</h1>
          </div>
          <div className="allLeagues">
            <div className="container">
              <div className="row">
                {leagues.map((league, index) => {
                  if (index < 3) {
                    return (
                      <Card league={league} key={index} />
                    );
                  }
                })}
              </div>
            </div>
            <NavLink to='/Leagues' className="homeLeaguesShowMoreBtn">Show More</NavLink>
          </div>
        </div>
      </div>
      <div className="adv row m-0 justify-content-center">
        <div className="col-lg-8 text-center mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
          >
            <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 511 511.9"
          >
            <path d="M510.95 150.5c-1.2-27.2-5.598-45.898-11.9-62.102-6.5-17.199-16.5-32.597-29.6-45.398-12.802-13-28.302-23.102-45.302-29.5-16.296-6.3-34.898-10.7-62.097-11.898C334.648.3 325.949 0 256.449 0s-78.199.3-105.5 1.5c-27.199 1.2-45.898 5.602-62.097 11.898-17.204 6.5-32.602 16.5-45.403 29.602-13 12.8-23.097 28.3-29.5 45.3-6.3 16.302-10.699 34.9-11.898 62.098C.75 177.801.449 186.5.449 256s.301 78.2 1.5 105.5c1.2 27.2 5.602 45.898 11.903 62.102 6.5 17.199 16.597 32.597 29.597 45.398 12.801 13 28.301 23.102 45.301 29.5 16.3 6.3 34.898 10.7 62.102 11.898 27.296 1.204 36 1.5 105.5 1.5s78.199-.296 105.5-1.5c27.199-1.199 45.898-5.597 62.097-11.898a130.934 130.934 0 0074.903-74.898c6.296-16.301 10.699-34.903 11.898-62.102 1.2-27.3 1.5-36 1.5-105.5s-.102-78.2-1.3-105.5zm-46.098 209c-1.102 25-5.301 38.5-8.801 47.5-8.602 22.3-26.301 40-48.602 48.602-9 3.5-22.597 7.699-47.5 8.796-27 1.204-35.097 1.5-103.398 1.5s-76.5-.296-103.403-1.5c-25-1.097-38.5-5.296-47.5-8.796C94.551 451.5 84.45 445 76.25 436.5c-8.5-8.3-15-18.3-19.102-29.398-3.5-9-7.699-22.602-8.796-47.5-1.204-27-1.5-35.102-1.5-103.403s.296-76.5 1.5-103.398c1.097-25 5.296-38.5 8.796-47.5C61.25 94.199 67.75 84.1 76.352 75.898c8.296-8.5 18.296-15 29.398-19.097 9-3.5 22.602-7.7 47.5-8.801 27-1.2 35.102-1.5 103.398-1.5 68.403 0 76.5.3 103.403 1.5 25 1.102 38.5 5.3 47.5 8.8 11.097 4.098 21.199 10.598 29.398 19.098 8.5 8.301 15 18.301 19.102 29.403 3.5 9 7.699 22.597 8.8 47.5 1.2 27 1.5 35.097 1.5 103.398s-.3 76.301-1.5 103.301zm0 0"></path>
            <path d="M256.45 124.5c-72.598 0-131.5 58.898-131.5 131.5s58.902 131.5 131.5 131.5c72.6 0 131.5-58.898 131.5-131.5s-58.9-131.5-131.5-131.5zm0 216.8c-47.098 0-85.302-38.198-85.302-85.3s38.204-85.3 85.301-85.3c47.102 0 85.301 38.198 85.301 85.3s-38.2 85.3-85.3 85.3zm0 0M423.852 119.3c0 16.954-13.747 30.7-30.704 30.7-16.953 0-30.699-13.746-30.699-30.7 0-16.956 13.746-30.698 30.7-30.698 16.956 0 30.703 13.742 30.703 30.699zm0 0"></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            enableBackground="new 0 0 512 512"
            version="1.1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path>
          </svg>
        </div>
        <div className="col-lg-8 text-center text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur aperiam ut necessitatibus, assumenda a maxime eos nulla maiores perspiciatis deleniti! A ratione ipsam magnam accusamus assumenda consectetur reiciendis hic obcaecati.
        </div>
      </div>
      <div style={{backgroundColor: "black"}}>
        <div className="topPlayers">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center text-white">
                <h1>TOP PLAYERS</h1>
              </div>
              {players.map((player, index) => {
                  if (index < 4) {
                    return (
                      <HomePlayerCard player={player} key={index} />
                    );
                  }
                })}
              {/* <HomePlayerCard />
              <HomePlayerCard />
              <HomePlayerCard />
              <HomePlayerCard /> */}
              <div className="col-lg-12 text-center mt-5">
                <NavLink to='/Players' className="homeLeaguesShowMoreBtn">Show More</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
