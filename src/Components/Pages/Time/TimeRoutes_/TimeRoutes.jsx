import React from 'react'
import { Route, Switch } from 'react-router'
import { Archive } from '../Archive_/Archive'
import { PendingAprroval } from '../PendingApproval_/PendingAprroval'
import { TimeNavBar } from '../TimeNavBar_/TimeNavBar'
import { Timesheet } from '../Timesheet_/TimeSheet' 
import { Unsubmiited } from '../Unsubmiitted/Unsubmiited'

export const TimeRoutes = () => {
    return (
        <div>
            <TimeNavBar/>
            <Switch>
                <Route exact path="/time">
                    <Timesheet/>
                </Route>
                <Route path="/approve">
                    <PendingAprroval/>
                </Route>
                <Route path="/missing_time">
                    <Unsubmiited/>
                </Route>
                <Route path="/entry/archives">
                    <Archive/>
                </Route>
                <Route>
                    <h1>Error Page</h1>
                </Route>
            </Switch>

        </div>
    )
}
