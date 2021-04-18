import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Signin from '../Auth/SignIn/Signin'
import Signup from '../Auth/SIgnUp/Signup'
import {Home} from '../Pages/Home/Home'

import CreateProject from '../Pages/Project/CreateProject'

import { CreateInvoice } from '../Pages/Invoices_/CreateInvoice'

import HomeHeader from './Header/HomeHeader'
import Header_login from "./Header/Header_login"
import { Footer } from '../Pages/Footer/Footer'
import Time from '../Pages/Reports/Time'

import { Timesheet } from '../Pages/Time/Timesheet_/TimeSheet'
import {HomeAfterLogin} from "../Pages/HomeAfterLogin_/HomeAfterLogin"

import { DayTabs } from '../Pages/Time/Timesheet_/TimeDayTab'
import { useSelector } from 'react-redux'

import { Expenses } from '../Pages/expenses/Expenses'

import PrivateRoute from './PrivateRoute'

import { FinalInvoice } from '../Pages/Invoices_/FinalInvoice'




export default function Router() {

    const isAuth = useSelector(state => state.auth.isAuth)


    return (
        <div>
           {
               isAuth ? <Header_login /> : <HomeHeader/>
           }
            
        
            <Switch>
                <Route exact path="/">
                    <Home />                    
                </Route>

                <Route path="/invoice">
                  <CreateInvoice/>                  
                </Route>
                {/* <Route path="/time">
                    <DayTabs/>           
                </Route> */}

                <Route path="/sign-in">
                    <Signin />
                </Route>
                <Route path="/Signup">
                    <Signup />
                </Route>
                <PrivateRoute path = "/welcome">
                    <HomeAfterLogin />
                </PrivateRoute>
                <PrivateRoute path="/projects">
                    <CreateProject />
                </PrivateRoute>
                <PrivateRoute path = "/reports">
                    <Time />
                </PrivateRoute>
                <PrivateRoute path="/time">
                    <Timesheet/>
                </PrivateRoute>
                <PrivateRoute path="/expense">
                    <Expenses/>

                </PrivateRoute>

<<<<<<< HEAD
                {/* </Route> */}
=======
               
>>>>>>> ae0d7e28c09dee4ef6794df4f57cda9b85c79ac4
                <Route path="/finalinvoice">
                    <FinalInvoice/>
                </Route>


            </Switch>
           
        </div>
    )
}
