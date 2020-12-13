import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Main from './Main';
import About from './About'
import History from './Histroy';
import Register from './Registration/Register';
import Update from './Update/Update';
import Todo from './Todo/CreateTodo';
import Chat from './Chat/Chat';
export default class Routes extends Component {
    render() {
        return (
            <Router history={History}>
                <Switch>
                    <Route path="/About" component={About} />
                    <Route path="/Register" component={Register} />
                    <Route path="/Update" component={Update} />
                    <Route path="/Todo" component={Todo} />
                    <Route path="/Chat" component={Chat} />
                    <Route path="/" component={Main} />
                </Switch>
            </Router>
        )
    }
}