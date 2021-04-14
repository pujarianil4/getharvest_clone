import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Signin from '../Auth/SignIn/Signin'
import Signup from '../Auth/SIgnUp/Signup'
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
        

                <Route path="/sign-in">
                    <Signin />
                </Route>
                <Route path="/Signup">
                    <Signup />
                </Route>

            </Switch>
        </div>
    )
}
