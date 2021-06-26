import './Teams.css';
import TeamCard  from '../../Components/TeamCard/TeamCard';
import TeamsBanner from '../../Components/TeamsBanner/TeamsBanner';

const Teams = (props) =>{
    return(
        <div className="Teams">
            <TeamsBanner />
            <TeamCard />
        </div>
    );
}   

export default Teams;