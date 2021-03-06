import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";


import Signin from "../Pages/Auth/SignIn/Signin";
import Signup from "../Pages/Auth/SIgnUp/Signup";
import { Home } from "../Pages/Home/Home";
import CreateProject from "../Pages/Project/CreateProject";
import { CreateInvoice } from "../Pages/Invoices_/CreateInvoice";
import HomeHeader from "../Components/Header/HomeHeader";
import Header_login from "../Components/Header/Header_login";
import { HomeAfterLogin } from "../Pages/HomeAfterLogin_/HomeAfterLogin";
import { Timesheet } from "../Pages/Time/Timesheet_/TimeSheet";
import Time from "../Pages/Reports/Time";
import { Expenses } from "../Pages/expenses/Expenses";
import PrivateRoute from "./PrivateRoute";
import { FinalInvoice } from "../Pages/Invoices_/FinalInvoice";
import { ProjectDisR } from "../Pages/ProjectDisplayR/ProjectDisR";

export default function Router() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <div>
      {
        //eslint-disable-next-line
        isAuth ? <Header_login /> : <HomeHeader />
      }

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/invoice">
          <CreateInvoice />
        </Route>

        <Route path="/sign-in">
          <Signin />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>

        <PrivateRoute path="/welcome">
          <HomeAfterLogin />
        </PrivateRoute>

        <PrivateRoute path="/projects">
          <CreateProject />
        </PrivateRoute>

        <PrivateRoute path="/reports">
          <Time />
        </PrivateRoute>

        <PrivateRoute path="/time">
          <Timesheet />
        </PrivateRoute>

        <PrivateRoute path="/expense">
          <Expenses />
        </PrivateRoute>

        <Route path="/finalinvoice">
          <FinalInvoice />
        </Route>

        <Route path="/projectdisr">
          <ProjectDisR />
        </Route>
      </Switch>
    </div>
  );
}
