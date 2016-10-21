import React from 'react';
import { Card } from 'antd';

export default class AvatorPopup extends React.Component {
    render() {
    	let imgSrc = this.props.show ? 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' : 'http://';
        return (
            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
			    <div className="custom-image">
			      <img alt="example" width="100%" src={imgSrc} />
			    </div>
			    <div className="custom-card" style={{textAlign: 'center'}}>
			      <h3>Europe Street beat</h3>
			      <p>www.instagram.com</p>
			    </div>
			</Card>
        )
    }
}
