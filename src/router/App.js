import React from 'react'
import RightSider from '../components/rightSider/rightSider'
import { Row, Col } from 'antd';

export default class App extends React.Component {
    render() {
        return (
            <div>
            <Row>
              <Col span={4}>
               <RightSider />
              </Col>
              <Col span={20}>{this.props.children}</Col>
            </Row>
            </div>
        )
    }

}
