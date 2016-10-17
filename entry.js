import React from 'react'
import ReactDOM from "react-dom";
import { Router, Link, browserHistory, Route, IndexRoute } from 'react-router'
import App from './src/router/App'
import About from './src/router/About'
import Home from './src/router/Home'
import Landing from './src/router/Landing'
import Logout from './src/router/Logout'
// import "./src/style/global.css"
import { Menu, Icon, Row, Col } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const e = document.createElement('div');
e.id = 'app';
document.body.appendChild(e);

const Sider = React.createClass({
    getInitialState() {
        return {
            mode: 'inline',
        };
    },
    changeMode(value) {
        this.setState({
            mode: value ? 'vertical' : 'inline',
        });
    },
    render() {
        return (
            <div>
            <Row>
		      <Col span={4}>
		      	<Menu
		          defaultOpenKeys={['sub1']}
		          mode={this.state.mode}
		          theme='dark'
		        >
		          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
		            <MenuItemGroup title="Item 1">
		              <Menu.Item key="1">Option 1</Menu.Item>
		              <Menu.Item key="2">Option 2</Menu.Item>
		            </MenuItemGroup>
		            <MenuItemGroup title="Item 2">
		              <Menu.Item key="3">Option 3</Menu.Item>
		              <Menu.Item key="4">Option 4</Menu.Item>
		            </MenuItemGroup>
		          </SubMenu>
		          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
		            <Menu.Item key="5">Option 5</Menu.Item>
		            <Menu.Item key="6">Option 6</Menu.Item>
		            <SubMenu key="sub3" title="Submenu">
		              <Menu.Item key="7">Option 7</Menu.Item>
		              <Menu.Item key="8">Option 8</Menu.Item>
		            </SubMenu>
		          </SubMenu>
		          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
		            <Menu.Item key="9">Option 9</Menu.Item>
		            <Menu.Item key="10">Option 10</Menu.Item>
		            <Menu.Item key="11">Option 11</Menu.Item>
		            <Menu.Item key="12">Option 12</Menu.Item>
		          </SubMenu>
		        </Menu>
			  </Col>
		      <Col span={20}>col-20</Col>
		    </Row>
		    </div>
        );
    },
});
ReactDOM.render(<Sider />, e);
