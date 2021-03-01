import React from "react";
import { Switch, Route, BrowserRouter,Link } from "react-router-dom"
import About from "../views/About";
import Home from "../views/Home";
export default class Router extends React.Component {
    render() {
        return <BrowserRouter>

            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </BrowserRouter>
    }
}