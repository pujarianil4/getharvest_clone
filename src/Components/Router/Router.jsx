import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Signin from '../Auth/SignIn/Signin'
import Signup from '../Auth/SIgnUp/Signup'
import {Home} from '../Pages/Home/Home'

import CreateProject from '../Pages/Project/CreateProject'

import { CreateInvoice } from '../Pages/Invoices_/CreateInvoice'

import HomeHeader from './Header/HomeHeader'
import { Footer } from '../Pages/Footer/Footer'

import { Timesheet } from '../Pages/Time/Timesheet_/TimeSheet'

import { DayTabs } from '../Pages/Time/Timesheet_/TimeDayTab'


export default function Router() {
    return (
        <div>
           
            <HomeHeader/>
        
        
            <Switch>
                <Route exact path="/">
                    <Home />                    
                </Route>

                <Route path="/invoice">
                  <CreateInvoice/>                  
                </Route>
                <Route path="/time">
                    <DayTabs/>           
                </Route>

                <Route path="/sign-in">
                    <Signin />
                </Route>
                <Route path="/Signup">
                    <Signup />
                </Route>

                <Route path="/projects">
                    <CreateProject />
                </Route>
                <Route path="/time">
                    <Timesheet/>
                </Route>

            </Switch>
            <Footer/>
        </div>
    )
}
