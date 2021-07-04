import "./TeamDetail.css";
//import image from "../../../assets/img/innerpageBg.jpg";
import { useEffect, useState } from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { GetTeamHttpRequest } from "../../../http/http-requests";
import TeamDetailsSlide from "../../Components/TeamDetailsSlide/TeamDetailsSlide";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const TeamDetail = ({ match }) => {
  const [detailData, setDetailData] = useState({});
  const [detailDataPlayer, setDetailDataPlayer] = useState([]);
  const [detailDataStadium, setDetailDataStadium] = useState([]);

  const getTeamData = async () => {
    const data = await GetTeamHttpRequest(match.params.id);
    setDetailData(data.data);
    setDetailDataPlayer(data.data.players);
    setDetailDataStadium(data.data.stadium);
  };
  useEffect(() => {
    getTeamData();
  }, []);

  return (
    <div className="TeamDetail">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="leagueDetailHeader">
              <h1>{detailData.name}</h1>
              <h4>
                The current champion of the league is {detailData.foundedYear}{" "}
                from all trophies {detailData.trophies} teams that play in this
                league{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="leagueImageHolder">
              <div className="leagueImage">
                <img src={detailData.logo} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="descriptionContent">
              <p>{detailData.description}</p>
              <div className="stadiumInfo">
                <img alt="image" src={detailDataStadium.image} />
                <div className="stadiumContent">
                  <h1>{detailDataStadium.name}</h1>
                  <div className="informationS">
                    <p>Capacity: {detailDataStadium.capacity}</p>
                    <p>Rank: {detailDataStadium.rank} </p>
                  </div>
                  <h2 className="descriptionAboutStadium">
                    {detailDataStadium.description}
                  </h2>
                </div>
              </div>
              {/* <div className="descriptionContentBeforeInfo">
                <div className="currentChampion">
                  <h4>Current Champion : {detailData.currentChampion}</h4>
                </div>
                <div className="maxTeams">
                  Team Number : {detailData.maxNrTeam}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12">
            <h1>Players that are part of {detailData.name}</h1>
            <Swiper
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 3,
                }
              }}
              navigation={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            >
              {detailDataPlayer.map((player, i) => {
                return (
                  <SwiperSlide key={i}>
                    <TeamDetailsSlide player={player} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
