import axios from "./axios";
import { CONTACTS,ORDERS } from "./endpoints";
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

export {
  GetContactHttpRequest,
  PostContactHttpRequest,
  UpdateContactHttpRequest,
  DeleteContactHttpRequest,
  PostOrderHttpRequest,
};
