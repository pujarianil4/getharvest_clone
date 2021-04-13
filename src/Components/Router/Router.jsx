import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {Home} from '../Pages/Home/Home'
import HomeHeader from './Header/HomeHeader'

export default function Router() {
    return (
        <div>
            <HomeHeader/>
            <Switch>
                <Route exact path="/">
                    <Home />                    
                </Route>
   
            </Switch>
        </div>
    )
}
