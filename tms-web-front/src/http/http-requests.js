import axios from "./axios";
import {LEAGUES} from './endpoints';
import {GET,POST,PUT,DELETE} from "./methods";

const LeaugesHttpRequest = () => {  
  return axios({
    method: GET,
    url: LEAGUES
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

export { LeaugesHttpRequest,LeaugesHttpRequestPost,LeaugesHttpRequestDelete};
