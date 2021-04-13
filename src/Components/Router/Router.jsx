import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {Home} from '../Pages/Home/Home'

export default function Router() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />                    
                </Route>
   
            </Switch>
        </div>
    )
}
