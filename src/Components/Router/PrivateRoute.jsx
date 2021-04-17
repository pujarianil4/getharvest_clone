import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from "react-router-dom"

export default function PrivateRoute({

    children,
    path,
    exact = false,
    redirect = "/sign-in",
    push = false
}) {
   
    const isAuth = useSelector(state => state.auth.isAuth);


    return ( isAuth ? <Route path = {path} exact = {exact}>
            {children}
    </Route> : <Redirect to ={redirect} path = {push}></Redirect>
        
    )
}
