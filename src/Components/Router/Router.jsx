import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'

export default function Router() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />                    
                </Route>
                <Route  path="/features">
                    <Features />                    
                </Route>
                <Route  path="/integrations">
                    <Integrations />                    
                </Route>
                <Route  path="/customers">
                    <Customers />                    
                </Route>
                <Route  path="/pricing">
                    <Pricing />                    
                </Route>
            </Switch>
        </div>
    )
}
