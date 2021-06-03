import './HomeSlider.css';
import {useState , useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import HomeSlide from '../../Components/HomeSlide/HomeSlide';
import {TeamsTable} from '../../../http/http-requests';

const HomeSlider = (porps) =>{
    const [teams , setTeams] = useState([]);

    const allTeams = async () =>{
        const allTeams = await TeamsTable()
        setTeams(allTeams.data);
    }

    useEffect(()=>{
       allTeams();
    },[]) 

    return(
        <Swiper
            slidesPerView={1}
            effect="fade"
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            {
                teams.map((team,i)=>{
                    return(
                    <SwiperSlide key={i}>
                        <HomeSlide teamImage={team.logo} teamName={team.name} city={team.city} manager={team.manager} trophies={team.trophies}/>
                    </SwiperSlide>
                    )
                })
                
            }
        </Swiper>
    );
    

}

export default HomeSlider;
