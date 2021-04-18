import { PROJECTIMERDATA, PROJECTREPORTDATA, PROJECTTASKDATA } from "./reportsActionType"

const initReportsTime = {
    projectReportData: {},
    projectTaskData: [],
    isLoadingProject: true,
    isLoadingTask: true
}

export const reportReducer = (state = initReportsTime, {type, payload}) => {

    switch (type) {

        case PROJECTREPORTDATA:
            return {
                ...state,
                projectReportData: payload,
                isLoadingProject: false
            }
            case PROJECTTASKDATA:
                return {
                    ...state,
                    projectTaskData: payload,
                    isLoadingTask: false

                }
            default: 
                return state; 
    }

}