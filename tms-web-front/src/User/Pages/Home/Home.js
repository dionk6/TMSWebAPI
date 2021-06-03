import "./Home.css";
import Card from '../../Components/CardComponent/Card'

import HomeSlider from '../../Components/HomeSlider/HomeSlider';

const Home = (props) => {
  return (
    <div className="Home">
        <HomeSlider/>
      <div className="topLeagues">
        <div className="container">
          <div className="TitleTopLeagues">
            <h1>Top Leagues</h1>
          </div>
          <div className="allLeagues">
            <Card/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
