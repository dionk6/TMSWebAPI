import "./Home.css";


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
          <div className="allLeagues"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
