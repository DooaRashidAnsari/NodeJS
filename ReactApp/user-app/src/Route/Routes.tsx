import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Main from './Main';
import About from './About'
import History from './Histroy';

export default class Routes extends Component {
    render() {
        return (
            <Router history={History}>
                <Switch>
                    <Route path="/About" component={About} />
                    <Route path="/" component={Main} />
                </Switch>
            </Router>
        )
    }
}