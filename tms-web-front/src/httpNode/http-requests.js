import axios from "./axios";
import { CONTACTS,ORDERS,CONFIRMORDER,EMAILSUBSCRIPTIONS } from "./endpoints";
import { GET, POST, PUT, DELETE } from "./methods";

const GetContactHttpRequest = () => {
  return axios({
    method: GET,
    url: CONTACTS,
  });
};
const PostContactHttpRequest = (DATA) => {
  return axios({
    method: POST,
    url: CONTACTS,
    data: DATA,
  });
};
const UpdateContactHttpRequest = (data) => {
  return axios({
    method: PUT,
    url: CONTACTS,
    data: data,
  });
};
const DeleteContactHttpRequest = (id) => {
  return axios({
    method: DELETE,
    url: CONTACTS + "/" + id,
  });
};

const PostOrderHttpRequest = (DATA) => {
  return axios({
    method: POST,
    url: ORDERS,
    data: DATA,
  });
};

const GetOrderHttpRequest = (id) => {
  return axios({
    method: GET,
    url: ORDERS+"/"+id
  });
};

const ConfirmOrderHttpRequest = (data) => {
  return axios({
    method: POST,
    url: CONFIRMORDER,
    data: data
  });
};

const GetConfirmOrderHttpRequest = (id) => {
  return axios({
    method: GET,
    url: CONFIRMORDER+"/"+id
  });
};

const GetAllConfirmOrderHttpRequest = () => {
  return axios({
    method: GET,
    url: CONFIRMORDER
  });
};

const GetOrdersHttpRequest = () => {
  return axios({
    method: GET,
    url: ORDERS,
  });
};

const PostSubscriptionHttpRequest = (data) => {
  return axios({
    method: POST,
    url: EMAILSUBSCRIPTIONS,
    data:data
  });
};

export {
  GetContactHttpRequest,
  PostContactHttpRequest,
  UpdateContactHttpRequest,
  DeleteContactHttpRequest,
  PostOrderHttpRequest,
  ConfirmOrderHttpRequest,
  GetConfirmOrderHttpRequest,
  GetOrderHttpRequest,
  GetOrdersHttpRequest,
  GetAllConfirmOrderHttpRequest,
  PostSubscriptionHttpRequest
};
