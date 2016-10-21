import React from 'react'
import RightSider from '../components/rightSider/rightSider'
import Header from '../components/header/header'
import { Row, Col } from 'antd';
import '../style/App.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="mainCon">
                <Header />
                <div>
                  <div className="rightSider">
                    <RightSider />
                  </div>
                  <div className="con">
                    {this.props.children}
                  </div>
                </div>
              
            </div>
        )
    }

}
