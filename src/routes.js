import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./containers/login";
import Home from "./containers/home";
import PageNotFound from "./containers/pageNotFound";
import ForgotPassword from "./containers/forgotPassword";

const PrivateRoute = ({ ...props }) => {
    const token = localStorage.getItem('userToken') || null;
    if (token == null) {
        return (<Route component={PageNotFound} />)
    }
    return (
        <Route {...props} />
    )
};

const Routes = function () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/forgotPassword" component={ForgotPassword} exact />
                <PrivateRoute path="/home" component={Home} exact />
                <Route path="/*" component={PageNotFound} exact />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes
