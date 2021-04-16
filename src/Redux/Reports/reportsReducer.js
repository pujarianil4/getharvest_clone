import { PROJECTREPORTDATA } from "./reportsActionType"

const initReportsTime = {
    projectReportData: {},
    isLoading: true
}

export const reportReducer = (state = initReportsTime, {type, payload}) => {

    switch (type) {

        case PROJECTREPORTDATA:
            return {
                ...state,
                projectReportData: payload,
                isLoading: false
            }
            default: 
                return state; 
    }

}