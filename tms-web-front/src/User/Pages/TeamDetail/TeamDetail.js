import "./TeamDetail.css";
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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const TeamDetail = ({ match }) => {
  const [detailData, setDetailData] = useState({});
  const [detailDataPlayer, setDetailDataPlayer] = useState([]);

  const getTeamData = async () => {
    console.log(match.params.id);
    const data = await GetTeamHttpRequest(match.params.id);
    console.log(data.data);
    setDetailData(data.data);
    setDetailDataPlayer(data.data.player);
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
              <h1>{detailData.city}</h1>
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
            <h1>Teams that are part of {detailData.name}</h1>
            <Swiper
              slidesPerView={3}
              loop={true}
              navigation={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            >
              {/* {detailDataPlayer.map((player, i) => {
                return <SwiperSlide key={i}>

                </SwiperSlide>;
              })} */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
