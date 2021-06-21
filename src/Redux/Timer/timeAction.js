import axios from "axios";
//import { useSelector } from "react-redux"

import {
  CREATETASK_FAILURE,
  CREATETASK_REQUEST,
  CREATETASK_SUCCESS,
  DELETETASK_REQUEST,
  EDITTASK_FAILURE,
  EDITTASK_REQUEST,
  EDITTASK_SUCCESS,
  GETPROJECT_FAILURE,
  GETPROJECT_REQUEST,
  GETPROJECT_SUCCESS,
  GETTASK_FAILURE,
  GETTASK_REQUEST,
  GETTASK_SUCCESS,
  DELETETASK_FAILURE,
  DELETETASK_SUCCESS,
} from "./actionType";

//______________________________________CREATE TASK START____________________________________________________//
export const createTaskRequest = () => {
  return {
    type: CREATETASK_REQUEST,
  };
};

export const createTaskSuccess = (payload) => {
  return {
    type: CREATETASK_SUCCESS,
    payload,
  };
};

export const createTaskFailure = (payload) => {
  return {
    type: CREATETASK_FAILURE,
    payload,
  };
};
//______________________________________CREATE TASK END____________________________________________________//

//______________________________________GET TASK START____________________________________________________//
export const getTaskRequest = () => {
  return {
    type: GETTASK_REQUEST,
  };
};

export const getTaskSuccess = (payload) => {
  // console.log(payload,"hwsflhuwgf")
  return {
    type: GETTASK_SUCCESS,
    payload,
  };
};

export const getTaskFailure = (payload) => {
  return {
    type: GETTASK_FAILURE,
    payload,
  };
};
//______________________________________GET TASK END____________________________________________________//

//______________________________________GET PROJECT START____________________________________________________//
export const getProjectRequest = () => {
  return {
    type: GETPROJECT_REQUEST,
  };
};

export const getProjectSuccess = (payload) => {
  return {
    type: GETPROJECT_SUCCESS,
    payload,
  };
};

export const getProjectFailure = (payload) => {
  return {
    type: GETPROJECT_FAILURE,
    payload,
  };
};
//______________________________________GET PROJECT END____________________________________________________//

// ________________________________________NETWORK REQUEST FOR ADDING TIMER______________________________________________//
export const createTaskTimer = (payload, userID) => (dispatch) => {
  console.log(payload);
  dispatch(createTaskRequest());
  return axios
    .post("https://1u30f.sse.codesandbox.io/timer", payload)
    .then((res) =>
      //dispatch(createTaskSuccess(res.data))

      dispatch(getTaskTimer(userID))
    )
    .catch((err) => {
      dispatch(createTaskFailure(err));
    });
};

// ________________________________________NETWORK REQUEST FOR GETTING TIMER______________________________________________//
export const getTaskTimer = (payload) => (dispatch) => {
  const url = `https://1u30f.sse.codesandbox.io/timer?userID=${payload}`;
  dispatch(getTaskRequest());
  return axios
    .get(url)
    .then((res) => {
      dispatch(getTaskSuccess(res.data));
      console.log(res.data);
      console.log(url);
    })
    .catch((err) => {
      dispatch(getTaskFailure(err));
    });
};

// ________________________________________NETWORK REQUEST FOR GETTING PROJECT DETAILS______________________________________________//
export const getProjectData = (payload) => (dispatch) => {
  dispatch(getProjectRequest());
  return axios
    .get(`https://c2ec8.sse.codesandbox.io/harvest?userId=${payload}`)
    .then((res) => {
      let arrdata = [];
      for (let k in res.data) {
        arrdata.push(res.data[k]);
      }
      dispatch(getProjectSuccess(arrdata));
      // console.log(arrdata)
    })
    .catch((err) => {
      dispatch(getProjectFailure(err));
    });
};

// ________________________________________NETWORK REQUEST FOR EDIT THE TASK______________________________________________//

export const edittaskreq = () => {
  return {
    type: EDITTASK_REQUEST,
  };
};
export const edittaskfailure = () => {
  return {
    type: EDITTASK_FAILURE,
  };
};

export const edittasksuccess = (payload) => {
  return {
    type: EDITTASK_SUCCESS,
    payload,
  };
};

export const edittask = (id, payload, userID) => (dispatch) => {
  dispatch(edittaskreq());
  return axios
    .patch(`https://1u30f.sse.codesandbox.io/timer/${id}`, payload)
    .then((res) => {
      dispatch(edittasksuccess(res.data));
      dispatch(getTaskTimer(userID));
    })
    .catch((error) => {
      dispatch(edittaskfailure());
    });
};
// ________________________________________NETWORK REQUEST FOR DELETE THE TIMER______________________________________________//

export const deletetaskreq = () => {
  return {
    type: DELETETASK_REQUEST,
  };
};
export const deletetasksuccess = () => {
  return {
    type: DELETETASK_SUCCESS,
  };
};

export const deletetaskfailure = () => {
  return {
    type: DELETETASK_FAILURE,
  };
};

export const deletetask = (id, userID) => (dispatch) => {
  dispatch(deletetaskreq());
  return axios
    .delete(`https://1u30f.sse.codesandbox.io/timer/${id}`)
    .then((res) => {
      dispatch(deletetasksuccess());
      dispatch(getTaskTimer(userID));
    })
    .catch((error) => {
      dispatch(deletetaskfailure());
    });
};
