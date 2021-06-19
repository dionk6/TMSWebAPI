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
                <div className="homeSliderHeader">
                    <h1>{props.teamName}</h1>
                </div>
                <div className="homeSliderContent">
                    <div className="teamInfoManager">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297">
                            <path d="M148.51 117.216c32.317 0 58.608-26.291 58.608-58.608S180.827 0 148.51 0c-32.317 0-58.608 26.291-58.608 58.608s26.291 58.608 58.608 58.608zM227.154 145.618c-.025-.008-.073-.026-.098-.032-7.631-1.864-30.999-5.133-30.999-5.133a5.194 5.194 0 00-6.406 3.188l-35.174 96.509c-2.029 5.567-9.903 5.567-11.932 0l-35.174-96.509a5.195 5.195 0 00-4.876-3.42c-.504 0-24.531 3.369-32.53 5.358-21.858 5.435-35.645 26.929-35.645 49.329v80.302c0 12.034 9.756 21.79 21.79 21.79h184.782c12.034 0 21.79-9.756 21.79-21.79v-80.569c-.001-22.303-14.328-42.096-35.528-49.023z"></path>
                            <path d="M161.775 138.613c-1.404-1.53-3.456-2.299-5.532-2.299h-15.485c-2.076 0-4.129.77-5.532 2.299a7.183 7.183 0 00-.946 8.462l8.278 12.479-3.875 32.69 7.631 20.3c.744 2.042 3.631 2.042 4.375 0l7.631-20.3-3.875-32.69 8.278-12.479a7.186 7.186 0 00-.948-8.462z"></path>
                        </svg>
                        {props.manager}
                    </div>
                    <div className="teamInfoCity">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            enableBackground="new 0 0 512 512"
                            version="1.1"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                            >
                            <path d="M256 0C161.896 0 85.333 76.563 85.333 170.667c0 28.25 7.063 56.26 20.49 81.104L246.667 506.5c1.875 3.396 5.448 5.5 9.333 5.5s7.458-2.104 9.333-5.5l140.896-254.813c13.375-24.76 20.438-52.771 20.438-81.021C426.667 76.563 350.104 0 256 0zm0 256c-47.052 0-85.333-38.281-85.333-85.333S208.948 85.334 256 85.334s85.333 38.281 85.333 85.333S303.052 256 256 256z"></path>
                        </svg>
                        
                        <span>{props.city}</span>
                        
                        </div>
                    <div className="teamInfoTrophies">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="512"
                            height="512"
                            viewBox="0 0 24 24"
                            >
                            <path d="M16.829 15.11a.75.75 0 01-.149-1.485c2.731-.556 5.626-3.918 5.882-9.125H19.25a.75.75 0 010-1.5h4.08a.75.75 0 01.75.75c0 6.499-3.572 10.626-7.1 11.345a.78.78 0 01-.151.015zM7.161 15.09a.786.786 0 01-.165-.018C3.52 14.292 0 10.153 0 3.75A.75.75 0 01.75 3h4a.75.75 0 010 1.5H1.519c.255 5.134 3.111 8.504 5.806 9.108a.751.751 0 01-.164 1.482zM13.25 16.11a.75.75 0 00-.75.75h-1a.75.75 0 00-1.5 0v3.64c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75v-3.64a.75.75 0 00-.75-.75z"></path>
                            <path d="M14.25 20h-4.5A2.752 2.752 0 007 22.75v.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-.5A2.752 2.752 0 0014.25 20zM18.25 0H5.75C4.785 0 4 .785 4 1.75v7.255c.043 6.456 7.439 9.095 7.754 9.204a.744.744 0 00.491.001C12.561 18.1 20 15.46 20 9V1.75C20 .785 19.215 0 18.25 0z"></path>
                        </svg> 
                        <span>{props.trophies}</span>    
                    </div>
                   
                </div>
                <div className="homeSliderDescription">
                    <p>
                        {props.description}
                    </p>

                </div>
            </div>
        </div>
    );
}

export default HomeSlide;