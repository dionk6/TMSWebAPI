import './Home.css';
import Card from '../../Components/CardComponent/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
const Home = (props) =>{

    return(
        <div className="Home">
            <div className="topLeagues">
                <div className="container">
                    <div className="TitleTopLeagues">
                        <h1>Top Leagues</h1>
                    </div>
                    <div className="allLeagues">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            
                        </Swiper>
                        
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home