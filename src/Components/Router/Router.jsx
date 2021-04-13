import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {Home} from '../Pages/Home/Home'
import { Timesheet } from '../Pages/Time/Timesheet_/TimeSheet'
import HomeHeader from './Header/HomeHeader'

export default function Router() {
    return (
        <div>
            <HomeHeader/>
            <Switch>
                <Route exact path="/">
                    <Home />                    
                </Route>
                <Route exact path="/time">
                  <Timesheet/>                  
                </Route>
        
            </Switch>
        </div>
    )
}
