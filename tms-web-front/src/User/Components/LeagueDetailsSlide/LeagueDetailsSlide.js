import "./LeagueDetailsSlide.css";

const LeagueDetailsSlide = (props) => {

  return (
    <div className="LeagueDetailsSlide">
      <img src={props.team.logo} />
      <p>{props.team.name}</p>
    </div>
  );

};

export default LeagueDetailsSlide;
