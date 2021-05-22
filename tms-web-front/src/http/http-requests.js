import axios from "./axios";
import {LEAGUES,LEAGUESTable,PLAYERSTable,STADIUMSTable,TEAMSTable,Team} from './endpoints';
import {GET,POST,DELETE} from "./methods";

const LeaugesHttpRequest = () => {  
  return axios({
    method: GET,
    url: LEAGUES
  });
};

const LeaguesTable = () => {  
  return axios({
    method: GET,
    url: LEAGUESTable
  });
};

const LeaugesHttpRequestPost = (data) => {  
  return axios({
    method: POST,
    url: LEAGUES,
    data:data
  });
};

const LeaugesHttpRequestDelete = (id) => {  
  return axios({
    method: DELETE,
    url: LEAGUES+"/"+id
  });
};

const StadiumsTable = () => {  
  return axios({
    method: GET,
    url: STADIUMSTable
  });
};

const TeamsTable = () =>{
  return axios({
    method: GET,
    url: TEAMSTable
  });
}

const GetTeam = (id) =>{
  return axios({
    method: GET,
    url: Team+"/"+id
  });
}

const GetLeague = (id) =>{
  return axios({
    method: GET,
    url: LEAGUES+"/"+id
  });
}


const playersHttpRequestTable = () =>{
  return axios({
    method: GET,
    url: PLAYERSTable
  });
}


export { LeaugesHttpRequest,LeaguesTable,playersHttpRequestTable,StadiumsTable,LeaugesHttpRequestPost,LeaugesHttpRequestDelete,TeamsTable,GetTeam,GetLeague};
