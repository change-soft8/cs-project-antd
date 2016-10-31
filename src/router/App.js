import React from 'react'
import RightSider from '../components/rightSider/rightSider'
import Header from '../components/header/header'
import { Row, Col } from 'antd';
import '../style/App.css';

export default class App extends React.Component {
    state = {
        rightSiderMode: 'inline',
    }

    componentWillMount() {
        var currentWidth = document.body.clientWidth;
        if (currentWidth < 1025) {
            this.setState({
                rightSiderMode: 'vertical'
            });

        } else {
            this.setState({
                rightSiderMode: 'inline'
            });
        }
    }

    changeRightSider() {
        this.setState({
            rightSiderMode: this.state.rightSiderMode == 'vertical' ? 'inline' : 'vertical',
        });
    }

    render() {
        return (
            <div className={`mainCon ${this.state.rightSiderMode == 'vertical' ? 'vertical' : ''}`}>
                <Header callbackParent={this.changeRightSider.bind(this)}/>
                <div>
                  <div className="rightSider">
                    <RightSider mode={this.state.rightSiderMode}/>
                  </div>
                  <div className="con">
                    {this.props.children}
                  </div>
                </div>
            </div>
        )
    }

}
