import './Leagues.css';
import Card from '../../Components/CardComponent/Card';
import LeaguesBanner from '../../Components/LeaguesBanner/LeaguesBanner';

const Leagues = (props) =>{
    return(
        <div className="Leagues">
            <div className="topHeader">
                <LeaguesBanner />
            </div>
            <div className="container">
                <div className="row">
                    <div className="infoLeagues">
                        <div className="titleLeagues">
                            <h1>All Leagues</h1>
                        </div>
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leagues;