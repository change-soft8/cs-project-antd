import React from 'react';
import { Row, Icon, Popover, Button,Tooltip  } from 'antd';
import AvatorPopup from './avatorPopup'
import '../../style/header/header.css';
const toggleText = <span>收缩</span>;
const setText = <span>设置</span>;
const content = <AvatorPopup />;


export default class Header extends React.Component {
    state = {
       imgShow: <AvatorPopup />
    }

    showPopover(s) {
      if(s) {
        this.setState({imgShow: <AvatorPopup show={true}/>})
      }
    }

    render() {
        return (
            <div className="header">    
              <div className="header-logo">
                <img src="https://step.newtouch.com/images/newlogo.png"/>
              </div>
              <div  className="header-nav">
                <Tooltip placement="bottom" title={toggleText}>
                  <div className="sidebar-toggle header-icon">
                    <Icon type="bars" />
                  </div>
                </Tooltip>
                <Tooltip placement="bottomLeft" title={setText}>
                  <div className="setting header-icon">
                    <Icon type="setting" />
                  </div>
                </Tooltip>
                <Popover placement="bottomRight"  content={this.state.imgShow} trigger="click" onVisibleChange={this.showPopover.bind(this)}>
                  <Button><div className="header-user">
                  <img src="https://step.newtouch.com/v2/project/picture/5919171d-dfa9-49b2-ad2e-87a1adbac7bd.png"/>
                  <span>Alexander Pierce</span>
                </div></Button>
                </Popover>
              </div>
            </div>
        )
    }

}
