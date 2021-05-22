import axios from "./axios";
import {LEAGUES,LEAGUESTable,STADIUMSTable} from './endpoints';
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

export { LeaugesHttpRequest,LeaguesTable,LeaugesHttpRequestPost,LeaugesHttpRequestDelete,StadiumsTable};
