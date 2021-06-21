import Axios from "axios";
import { PROJECTREPORTDATA, PROJECTTASKDATA } from "./reportsActionType";

const projectReportData = (paylaod) => {
  return {
    type: PROJECTREPORTDATA,
    payload: paylaod,
  };
};

const projectTaskData = (payload) => {
  return {
    type: PROJECTTASKDATA,
    payload: payload,
  };
};

// ----------------------------------- Network Requests -------------------------------------------------- //

const getProjectData = (userId) => (dispatch) => {
  const axios = Axios.create({
    baseURL: "https://c2ec8.sse.codesandbox.io",
  });
  axios({
    url: "/harvest",
    method: "get",
    params: {
      userId,
    },
  })
    .then((res) => {
      res = res.data;
      dispatch(projectReportData(res));
    })
    .catch((error) => console.log(error));
};

// ----------------------------------------------- Timer Data request ----------------------------------//

const getTaskData = (userId) => (dispatch) => {
  const axios = Axios.create({
    baseURL: "https://1u30f.sse.codesandbox.io",
  });
  axios({
    url: "/timer",
    method: "get",
    params: {
      userID: userId,
    },
  })
    .then((res) => {
      res = res.data;
      // console.log(res)
      dispatch(projectTaskData(res));
    })
    .catch((error) => console.log(error));
};

//--------------------------------------------end request ----------------------------------------------//

export { getProjectData, projectReportData, getTaskData, projectTaskData };
