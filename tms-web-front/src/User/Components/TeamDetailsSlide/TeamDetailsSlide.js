import "./TeamDetailsSlide.css";

const TeamDetailsSlide = (props) => {
  return (
    <div className="TeamDetailsSlide">
      <img src={props.player.photo} />
      <h4>{props.player.firstName + " " + props.player.lastName}</h4>
    </div>
  );
};

export default TeamDetailsSlide;
