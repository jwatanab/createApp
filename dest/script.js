import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <h1>Hello, World</h1>
        );
    }
}

render((
    <Router history={history}>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>
), document.querySelector('#app'));