import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Main from './Main';
import About from './About'
import History from './Histroy';
import Register from './Registration/Register';

export default class Routes extends Component {
    render() {
        return (
            <Router history={History}>
                <Switch>
                    <Route path="/About" component={About} />
                    <Route path="/Register" component={Register} />
                    <Route path="/" component={Main} />
                </Switch>
            </Router>
        )
    }
}