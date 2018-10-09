import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import { Table } from 'antd';
import { Row, Col } from 'antd';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
}, {
  title: '发起时间',
  dataIndex: 'time',
}, {
  title: '加粉账号（个）',
  dataIndex: 'account',
}, {
  title: '目标加粉（个）',
  dataIndex: 'goal',
}, {
  title: '成功加粉（个）',
  dataIndex: 'suc',
}, {
  title: '详情',
  dataIndex: 'detail',
  render: text => <a>{text}</a>,
}];
const data = [{
  key: '1',
  name: 'John Brown',
  time: 32,
  account: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  time: 42,
  account: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  time: 32,
  account: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Disabled User',
  time: 99,
  account: 'Sidney No. 1 Lake Park',
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
};

class App extends Component {
  state = {
    visible: false ,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render(){
    return (
      <div id='addFans'>
        <Row>
          <Col span={3} style={{ background: '#ECECEC', padding: '30px', textAlign: 'center' }}>
            <h4><Icon type="user-add" theme="outlined" />清粉次数</h4>
            <h1>{100}</h1>
          </Col>
          <Col span={3} style={{ background: '#ECECEC', padding: '30px', textAlign: 'center' }}>
            <h4><Icon type="usergroup-add" theme="outlined" />清粉人数</h4>
            <h1>{100}</h1>
          </Col>
        </Row>
        <div style={{display:'flex',justifyContent:'space-between',padding:'0 50px'}}>
          <h2>任务明细</h2>
          <div>
            <Button type="danger" onClick={this.showModal} style={{marginRight:'30px'}}>删除</Button>
            <Button type="primary" onClick={this.props.newTask}>新建任务</Button>
          </div>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default App