import Axios from "axios";
import { useSelector } from "react-redux";
import { PROJECTREPORTDATA } from "./reportsActionType";


const projectReportData = (paylaod) => {
   
    return {
        type: PROJECTREPORTDATA,
        payload: paylaod
    }
}


const getProjectData = (userId) => (dispatch) => {

    console.log(userId);
    const axios = Axios.create({
        baseURL: "https://c2ec8.sse.codesandbox.io"
    });

    axios({
        url: "/harvest",
        method: "get",
        params: {
            userId
        }
    })
    .then((res) => {

        res = res.data;
        console.log(res)
        dispatch(projectReportData(res))
    })
    .catch((error) => 
        console.log(error)    
    )

}

export {getProjectData, projectReportData}

