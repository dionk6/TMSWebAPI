import "./AboutPhoto.css"
import teamFirst from '../../Images/teamFirst.jpg';
import teamMid from '../../Images/teamMid.jpg';
import teamSecond from '../../Images/teamSecond.jpg';

const AboutPhoto = ()=>{
    return (
        <div className="AboutPhoto">
            <div className="container-fluid ">
                <div className="row mb-5">
                    <div className="col-lg-4 p-0">
                        <img className="w-100" src = {teamFirst}/>
                    </div>
                    <div className="col-lg-4 p-0">
                        <img className="w-100" src = {teamMid}/>
                    </div>
                    <div className="col-lg-4 p-0">
                        <img className="w-100" src = {teamSecond}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPhoto;