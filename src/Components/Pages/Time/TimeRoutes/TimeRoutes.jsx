import React from 'react'
import { Route, Switch } from 'react-router'
import { TimeNavBar } from '../TimeNavBar/TimeNavBar'
import { Timesheet } from '../Timesheet/Timesheet'

export const TimeRoutes = () => {
    return (
        <div>
            <TimeNavBar/>
            <Switch>
                <Route exact path="/time">
                    <Timesheet/>
                </Route>
            </Switch>

        </div>
    )
}
