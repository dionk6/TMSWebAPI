import './HomeSlider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import HomeSlide from '../../Components/HomeSlide/HomeSlide'

const HomeSlider = () =>{
      
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

            <SwiperSlide >
                <HomeSlide teamImage={""} teamName="Ac Milan" city="Milan" manager="Stefiano Pioli" trophies="60"/>
            </SwiperSlide>
        </Swiper>
    );
    

}

export default HomeSlider;
