import './HomeSlide.css';
import backGroundImage from '../../../assets/img/soccer-field.jpg';

const HomeSlide = (props) =>{
    return(
        <div className="HomeSlide">
            <div className="homeSlideImage" style={{background:`url(${backGroundImage}) no-repeat center`,backgroundSize:"cover"}}>
                <div className="teamImage">
                    <img src={props.teamImage} alt={props.teamImage}/>
                </div>
            </div>
            <div className="homeSlideText">
                <div className="homeSliderContent">
                    <h1>{props.teamName}</h1>
                    <p>{props.city}</p>
                </div>
            </div>
        </div>
    );
}

export default HomeSlide;