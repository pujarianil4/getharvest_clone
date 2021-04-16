import Axios from "axios";
import { PROJECTREPORTDATA } from "./reportsActionType";


const projectReportData = (paylaod) => {
   
    return {
        type: PROJECTREPORTDATA,
        payload: paylaod
    }
}


const getProjectData = () => (dispatch) => {

    const axios = Axios.create({
        baseURL: "https://auth-dev-9137e-default-rtdb.firebaseio.com"
    });

    axios({
        url: "/projects.json",
        method: "get"
    })
    .then((res) => {

        res = res.data[5];
        
        dispatch(projectReportData(res))
    })
    .catch((error) => 
        console.log(error)    
    )

}

export {getProjectData, projectReportData}

