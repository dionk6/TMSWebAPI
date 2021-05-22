import axios from "./axios";
import {LEAGUES,LEAGUESTable,PLAYERSTable,STADIUMSTable,TEAMSTable,Team,Player} from './endpoints';
import {GET,POST,PUT,DELETE} from "./methods";

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
const LeaugesHttpRequestPut = (data) => {  
  return axios({
    method: PUT,
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

const GetPlayer = (id) =>{
  return axios({
    method: GET,
    url: Player+"/"+id
  });
}


const playersHttpRequestTable = () =>{
  return axios({
    method: GET,
    url: PLAYERSTable
  });
}

const playersHttpRequestPut = (data) =>{
  return axios({
    method: PUT,
    url: Player,
    data: data
  });
}

const playersHttpRequestPost = (data) =>{
  return axios({
    method: POST,
    url: Player,
    data: data
  });
}

const playersHttpRequestDelete = (id) => {  
  return axios({
    method: DELETE,
    url: Player+"/"+id
  });
};



export { LeaugesHttpRequest,LeaguesTable,playersHttpRequestTable,StadiumsTable,LeaugesHttpRequestPost,LeaugesHttpRequestPut,LeaugesHttpRequestDelete,playersHttpRequestDelete,TeamsTable,GetTeam,GetLeague,GetPlayer,playersHttpRequestPut,playersHttpRequestPost};
