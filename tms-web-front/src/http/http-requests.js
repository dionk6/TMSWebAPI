import axios from "./axios";
import {SEND_RESERVATION,SEND_SUBSCRIPTION,SEND_KONTAKT} from './endpoints';
import { POST } from "./methods";

const subscriptionHttpRequest = (data) => {  
  return axios({
    method: POST,
    url: SEND_SUBSCRIPTION,
    data: data,
  });
};

const sendKontaktHttpRequest = (data) => {
  return axios({
    method: POST,
    url: SEND_KONTAKT,
    data: data,
  });
};

const sendReservationHttpRequest = (data) => {
  return axios({
    method: POST,
    url: SEND_RESERVATION,
    data: data,
  });
};



export { subscriptionHttpRequest,sendKontaktHttpRequest,sendReservationHttpRequest };
