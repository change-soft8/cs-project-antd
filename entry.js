import React from 'react'
import ReactDOM from "react-dom";
import { Router, Link, browserHistory, Route, IndexRoute } from 'react-router'
import App from './src/router/App'
import About from './src/router/About'
import Home from './src/router/Home'
import Landing from './src/router/Landing'
import Logout from './src/router/Logout'
import ButtonPage from './src/pages/buttonPage'
import { Menu, Icon, Row, Col } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
      <Route path="/buttonPage" component={ButtonPage}/>
    </Route>
  </Router>
), e);
