import { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import HomeSlide from "../../Components/HomeSlide/HomeSlide";
import { TeamsTable } from "../../../http/http-requests";
import "./HomeSlider.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);

const HomeSlider = (porps) => {
  const [teams, setTeams] = useState([]);

  const allTeams = async () => {
    const allTeams = await TeamsTable();
    setTeams(allTeams.data);
    console.log(allTeams.data)
  };

  useEffect(() => {
    allTeams();
  }, []);

  return (
    <div className="HomeSilder">
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={{clickable: true}}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {teams.map((team, i) => {
          return (
            <SwiperSlide key={i}>
              <HomeSlide
                teamImage={team.logo}
                teamName={team.name}
                city={team.city}
                manager={team.manager}
                trophies={team.trophies}
                description={team.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
