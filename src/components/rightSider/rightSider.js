import React from 'react';
import { Link } from 'react-router'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class RightSider extends React.Component {
    state = {
        mode: 'inline',
    }

    changeMode(value) {
        this.setState({
            mode: value ? 'vertical' : 'inline',
        });
    }
    render() {
        return (
            <Menu
                  defaultOpenKeys={['sub1']}
                  mode={this.state.mode}
                  theme='dark'
                >
                  <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <MenuItemGroup title="Item 1">
                      <Menu.Item key="1"><Link to="/logout">Log out</Link></Menu.Item>
                      <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
                      <Menu.Item key="3"><Link to="/">Home</Link></Menu.Item>
                      <Menu.Item key="4"><Link to="/landing">Landing</Link></Menu.Item>
                      <Menu.Item key="5">Option 2</Menu.Item>
                      <Menu.Item key="6">Option 2</Menu.Item>
                      <Menu.Item key="7">Option 2</Menu.Item>
                      <Menu.Item key="8">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                      <Menu.Item key="9">Option 3</Menu.Item>
                      <Menu.Item key="10">Option 4</Menu.Item>
                    </MenuItemGroup>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="21">Option 5</Menu.Item>
                    <Menu.Item key="22">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                      <Menu.Item key="31">Option 7</Menu.Item>
                      <Menu.Item key="32">Option 8</Menu.Item>
                    </SubMenu>
                  </SubMenu>
                  <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="41">Option 9</Menu.Item>
                    <Menu.Item key="42">Option 10</Menu.Item>
                    <Menu.Item key="43">Option 11</Menu.Item>
                    <Menu.Item key="44">Option 12</Menu.Item>
                  </SubMenu> 
                   <SubMenu key="sub5" title={<span><Icon type="setting" /><span>Navigation Four</span></span>}>
                    <Menu.Item key="51">Option 9</Menu.Item>

                  </SubMenu> 
            </Menu>
        )
    }

}
