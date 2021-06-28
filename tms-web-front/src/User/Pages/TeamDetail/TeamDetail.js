import "./TeamDetail.css";
import { useEffect, userState } from "react";
import "";

const TeamDetail = (props) => {
  return (
    <div className="TeamDetail">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="leagueDetailHeader">
              <h1>{detailData.name}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="leagueImageHolder">
              <div className="leagueImage">
                <img src={detailData.logo} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="descriptionContent">
              <p>{detailData.description}</p>
              <div className="descriptionContentBeforeInfo">
                <div className="currentChampion">
                  <h4>Current Champion : {detailData.currentChampion}</h4>
                </div>
                <div className="maxTeams">
                  Team Number : {detailData.maxNrTeam}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12"></div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
