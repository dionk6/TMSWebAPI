import axios from "./axios";
import {
  LEAGUES,
  STADIUM,
  LEAGUESTable,
  PLAYERSTable,
  STADIUMSTable,
  TEAMSTable,
  Team,
  Player,
  SelectTeams,
  SelectLeagues,
  SelectStadiums,
  SendEmail,
  CreateAccount,
  SignIn,
  GetUser,
  Logout,
  ALLLEAGUEDATA,
  TeamWithPlayers,
  SendConfirmationEmail
} from "./endpoints";
import { GET, POST, PUT, DELETE } from "./methods";

const LeaugesHttpRequest = () => {
  return axios({
    method: GET,
    url: LEAGUES,
  });
};
const GetLeaugeHttpRequest = (id) => {
  return axios({
    method: GET,
    url: ALLLEAGUEDATA + "/" + id,
  });
};

const LeaguesTable = () => {
  return axios({
    method: GET,
    url: LEAGUESTable,
  });
};

const LeaugesHttpRequestPost = (data) => {
  return axios({
    method: POST,
    url: LEAGUES,
    data: data,
  });
};
const LeaugesHttpRequestPut = (data) => {
  return axios({
    method: PUT,
    url: LEAGUES,
    data: data,
  });
};

const LeaugesHttpRequestDelete = (id) => {
  return axios({
    method: DELETE,
    url: LEAGUES + "/" + id,
  });
};

const StadiumsTable = () => {
  return axios({
    method: GET,
    url: STADIUMSTable,
  });
};

const AddStadium = (data) => {
  return axios({
    method: POST,
    url: STADIUM,
    data: data,
  });
};
const GetStadium = (id) => {
  return axios({
    method: GET,
    url: STADIUM + "/" + id,
  });
};
const SetStadium = (data) => {
  return axios({
    method: PUT,
    url: STADIUM,
    data: data,
  });
};
const DeleteStadium = (id) => {
  return axios({
    method: DELETE,
    url: STADIUM + "/" + id,
  });
};

const TeamsTable = () => {
  return axios({
    method: GET,
    url: TEAMSTable,
  });
};

const GetTeam = (id) => {
  return axios({
    method: GET,
    url: Team + "/" + id,
  });
};

const SetTeam = (data) => {
  return axios({
    method: PUT,
    url: Team,
    data: data,
  });
};

const AddTeam = (data) => {
  return axios({
    method: POST,
    url: Team,
    data: data,
  });
};

const DeleteTeam = (id) => {
  return axios({
    method: DELETE,
    url: Team + "/" + id,
  });
};

const GetLeague = (id) => {
  return axios({
    method: GET,
    url: LEAGUES + "/" + id,
  });
};

const GetPlayer = (id) => {
  return axios({
    method: GET,
    url: Player + "/" + id,
  });
};

const playersHttpRequestTable = () => {
  return axios({
    method: GET,
    url: PLAYERSTable,
  });
};

const playersHttpRequestPut = (data) => {
  return axios({
    method: PUT,
    url: Player,
    data: data,
  });
};

const playersHttpRequestPost = (data) => {
  return axios({
    method: POST,
    url: Player,
    data: data,
  });
};

const playersHttpRequestDelete = (id) => {
  return axios({
    method: DELETE,
    url: Player + "/" + id,
  });
};

const SelectAllTeams = () => {
  return axios({
    method: GET,
    url: SelectTeams,
  });
};

const SelectAllLeagues = () => {
  return axios({
    method: GET,
    url: SelectLeagues,
  });
};

const SelectAllStadiums = () => {
  return axios({
    method: GET,
    url: SelectStadiums,
  });
};

const sendEmail = (data) => {
  return axios({
    method: POST,
    url: SendEmail,
    data: data,
  });
};

const sendConfirmationEmail = (data) => {
  return axios({
    method: POST,
    url: SendConfirmationEmail,
    data: data,
  });
};

const createAccount = (data) => {
  return axios({
    method: POST,
    url: CreateAccount,
    data: data,
  });
};

const signIn = (data) => {
  return axios({
    method: POST,
    url: SignIn,
    data: data,
  });
};

const getUser = (id) => {
  return axios({
    method: GET,
    url: GetUser + "/" + id,
  });
};

const logout = () => {
  return axios({
    method: GET,
    url: Logout,
  });
};

const GetTeamHttpRequest = (id) => {
  return axios({
    method: GET,
    url: TeamWithPlayers + "/" + id,
  });
};

export {
  LeaugesHttpRequest,
  GetLeaugeHttpRequest,
  AddStadium,
  GetStadium,
  SetStadium,
  DeleteStadium,
  LeaguesTable,
  playersHttpRequestTable,
  StadiumsTable,
  LeaugesHttpRequestPost,
  LeaugesHttpRequestPut,
  LeaugesHttpRequestDelete,
  playersHttpRequestDelete,
  TeamsTable,
  GetTeam,
  GetLeague,
  GetPlayer,
  playersHttpRequestPut,
  playersHttpRequestPost,
  SelectAllTeams,
  SelectAllLeagues,
  SelectAllStadiums,
  SetTeam,
  AddTeam,
  DeleteTeam,
  sendEmail,
  createAccount,
  signIn,
  getUser,
  logout,
  GetTeamHttpRequest,
  sendConfirmationEmail
};
