import { useEffect, useState } from "react";
import "./LeagueDetail.css";
import { GetLeaugeHttpRequest } from "../../../http/http-requests";

const LeagueDetail = ({ match }) => {
  const [detailData, setDetailData] = useState({});

  const getLeadueData = async () => {
    const data = await GetLeaugeHttpRequest(match.params.id);
    setDetailData(data.data);
    console.log(data);
  };
  useEffect(() => {
    getLeadueData();
  }, []);
  
  return (
    <div className="LeagueDetail">
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
          <div className="col-12 col-md-12">

          </div>
        </div>
      </div>

    </div>
  );
};

export default LeagueDetail;
