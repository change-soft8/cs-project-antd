import React from 'react'
import ReactDOM from "react-dom";
import { Router, Link, browserHistory, Route, IndexRoute } from 'react-router'
import App from './msrc/router/App'
import About from './msrc/router/About'
import Home from './msrc/router/Home'
import Landing from './msrc/router/Landing'
import Logout from './msrc/router/Logout'

const e = document.createElement('div');
e.id = 'app';
document.body.appendChild(e);

ReactDOM.render((
    <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/landing" component={Landing}/>
      <Route path="/logout" component={Logout}/>
    </Route>
  </Router>
), e);
