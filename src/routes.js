import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./containers/login";
import Home from "./containers/home";
import PageNotFound from "./containers/pageNotFound";

const PrivateRoute = ({ token, ...props }) => {
    if (token == null) {
        return (<Route component={PageNotFound} />)
    }
    return (
        <Route {...props} />
    )
};

const Routes = function () {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('userToken') || null;
        setToken(token);
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/login" component={Login} exact />
                <PrivateRoute path="/home" component={Home} token={token} exact />
                <Route path="/*" component={PageNotFound} exact />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes
