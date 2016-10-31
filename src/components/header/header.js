import React from 'react';
import { Row, Icon, Popover, Button, Tooltip } from 'antd';
import AvatorPopup from './avatorPopup'
import '../../style/header/header.css';
import CloudWht from '../../img/cloudWht.png';

const setText = <span>设置</span>;
const content = <AvatorPopup />;


export default class Header extends React.Component {
    state = {
        imgShow: <AvatorPopup />,
        toggleIcon: 'menu-fold'
    }

    /**
     * 弹出图片
     * @param  {[type]} s [description]
     * @return {[type]}   [description]
     */
    showPopover(s) {
        if (s) {
            this.setState({ imgShow: <AvatorPopup show={true}/> })
        }
    }

    clickToggle() {
        this.props.callbackParent();
        let title = this.state.toggleIcon == 'menu-fold' ? 'menu-unfold' : 'menu-fold';
        this.setState({ toggleIcon: title })
    }

    render() {
        var toggleText = <span>{this.state.toggleTextTitle}</span>;
        return (
            <div className="header">    
              <div className="header-logo">
                <img className="imgBig" src="https://step.newtouch.com/images/newlogo.png"/>
                <img className="imgSmall" src={CloudWht}/>
              </div> 
              <div  className="header-nav">
                <div className="sidebar-toggle header-icon" onClick={this.clickToggle.bind(this)}>
                  <Icon type={this.state.toggleIcon} />
                </div>
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
