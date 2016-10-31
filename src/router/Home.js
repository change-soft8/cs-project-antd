import React from 'react'
import { Table } from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
    filters: [{
        text: 'Joe',
        value: 'Joe',
    }, {
        text: 'John',
        value: 'John',
    }],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
}, {
    title: 'Other',
    children: [{
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 100,
        sorter: (a, b) => a.age - b.age,
    }, {
        title: 'Address',
        children: [{
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 200,
        }, {
            title: 'Block',
            children: [{
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 50,
            }, {
                title: 'Door No.',
                dataIndex: 'number',
                key: 'number',
                width: 100,
            }, ],
        }, ],
    }, ],
}, {
    title: 'Company',
    children: [{
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200,
    }, {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 200,
    }, ],
}, {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 60,
    fixed: 'right',
}, ];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: 'John Brown',
        age: Math.ceil(Math.random() * 100),
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M',
    });
}

export default class Home extends React.Component {
    render() {
        return (
            <Table
              columns={columns}
              dataSource={data}
              bordered size="middle"
              scroll={{ x: 1010, y: 240 }}
              style={{padding:60}}
            />
        );
    }
}
