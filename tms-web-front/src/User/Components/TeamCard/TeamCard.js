import './TeamCard.css';
import TeamsBanner from '../TeamsBanner/TeamsBanner';
import TMSLogo from '../../../assets/img/TMSLogo.png';
import soccerField from '../../../assets/img/soccer-field.jpg';

const TeamCard = (props) =>{
    return(
        <div className="TeamCard ">
            <TeamsBanner />

            <div className="container teamscard">
                <div className="info row m-0">
                    {/* <img className="soccerfield" src={soccerField} /> */}
                    <div className="photoTeam col-md-6">
                        <img className="tmslogo" src={TMSLogo} />
                    </div>
                    <div className="infoTeam col-md-6">
                        <div className="headerInfo">
                            <h1>Ac Milan</h1>
                        </div>
                        <div className="infoContent">
                            <div className="info1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30.928"
                                    height="30.928"
                                    x="0"
                                    y="0"
                                    enableBackground="new 0 0 30.928 30.928"
                                    version="1.1"
                                    viewBox="0 0 30.928 30.928"
                                    xmlSpace="preserve"
                                    >
                                    <path d="M24.791 4.451c.02-.948-.016-1.547-.016-1.547l-9.264-.007h-.094l-9.265.007s-.035.599-.015 1.547H0v1.012c0 .231.039 5.68 3.402 8.665C4.805 15.373 6.555 15.999 8.618 16c.312 0 .633-.021.958-.049 1.172 1.605 2.526 2.729 4.049 3.289v4.445H9.154v2.784H7.677v1.561H23.251v-1.56h-1.478v-2.784h-4.471v-4.445c1.522-.56 2.877-1.684 4.049-3.289.327.028.648.048.96.048 2.062-.002 3.812-.627 5.215-1.873 3.363-2.985 3.402-8.434 3.402-8.665V4.451h-6.137zM4.752 12.619c-1.921-1.7-2.489-4.61-2.657-6.144h4.158c.176 1.911.59 4.292 1.545 6.385.175.384.359.748.547 1.104-1.433-.055-2.639-.502-3.593-1.345zm21.424 0c-.953.844-2.16 1.29-3.592 1.345.188-.355.372-.72.547-1.104.955-2.093 1.369-4.474 1.544-6.385h4.158c-.168 1.533-.735 4.443-2.657 6.144z"></path>
                                </svg> 
                                <p>Trophy:32</p>
                            </div>
                            <div className="info1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297">
                                    <path d="M148.51 117.216c32.317 0 58.608-26.291 58.608-58.608S180.827 0 148.51 0c-32.317 0-58.608 26.291-58.608 58.608s26.291 58.608 58.608 58.608zM227.154 145.618c-.025-.008-.073-.026-.098-.032-7.631-1.864-30.999-5.133-30.999-5.133a5.194 5.194 0 00-6.406 3.188l-35.174 96.509c-2.029 5.567-9.903 5.567-11.932 0l-35.174-96.509a5.195 5.195 0 00-4.876-3.42c-.504 0-24.531 3.369-32.53 5.358-21.858 5.435-35.645 26.929-35.645 49.329v80.302c0 12.034 9.756 21.79 21.79 21.79h184.782c12.034 0 21.79-9.756 21.79-21.79v-80.569c-.001-22.303-14.328-42.096-35.528-49.023z"></path>
                                    <path d="M161.775 138.613c-1.404-1.53-3.456-2.299-5.532-2.299h-15.485c-2.076 0-4.129.77-5.532 2.299a7.183 7.183 0 00-.946 8.462l8.278 12.479-3.875 32.69 7.631 20.3c.744 2.042 3.631 2.042 4.375 0l7.631-20.3-3.875-32.69 8.278-12.479a7.186 7.186 0 00-.948-8.462z"></path>
                                </svg>
                                <p>Manager:Conte</p>
                            </div>
                            <div className="info1">
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
                                <p>City:Milan</p>
                            </div>
                            <button className="buttonDetails">Details</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default TeamCard;