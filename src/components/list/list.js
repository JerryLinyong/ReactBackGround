import React, { Component } from 'react';
import { Row, Col, Modal, Button, Icon, Table, Input } from 'antd';

class App extends Component {
  state = { visible: false, operateLink: false }
  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
  };
  data = [{
    // key: '1',
    name: 'John Brown',
    account: 32,
    logIn: 'New York No. 1 Lake Park',
    group: '12',
    function: 'ninja',
    state: 'on',
    agent: 'gaga',
    operate: '配置详细资料'
  }, {
    // key: '2',
    name: 'John Brown',
    account: 32,
    logIn: 'New York No. 1 Lake Park',
    group: '12',
    function: 'ninja',
    state: 'on',
    agent: 'gaga',
    operate: '配置详细资料'
  }, {
    // key: '3',
    name: 'John Brown',
    account: 32,
    logIn: 'New York No. 1 Lake Park',
    group: '12',
    function: 'ninja',
    state: 'on',
    agent: 'gaga',
    operate: '配置详细资料'
  }, {
    // key: '4',
    name: 'John Brown',
    account: 32,
    logIn: 'New York No. 1 Lake Park',
    group: '12',
    function: 'ninja',
    state: 'on',
    agent: 'gaga',
    operate: '配置详细资料'
  }];
  columns = [{
    title: '昵称',
    dataIndex: 'name',
  }, {
    title: '账号',
    dataIndex: 'account',
  }, {
    title: '登录方式',
    dataIndex: 'logIn',
  }, {
    title: '分组',
    dataIndex: 'group',
  }, {
    title: '微信功能',
    dataIndex: 'function',
  }, {
    title: '在线状态',
    dataIndex: 'state',
  }, {
    title: '代理ip',
    dataIndex: 'agent',
  }, {
    title: '操作',
    dataIndex: 'operate',
    render: text => { return(<div><a onClick={this.showModal}>{text.slice(0,2)}</a>|<a onClick={this.showModal}>{text.slice(2)}</a></div>)},
  }];
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
  componentWillMount () {
    let a = this.data
    this.data = [...a,...a,...a]
  }
  render(){
    const Search = Input.Search;
    return (
      <div>
        <Row>
          <Col span={3} style={{ background: '#ECECEC', padding: '30px', textAlign: 'center' }}>
            <h4><Icon type="smile" theme="outlined" />总账号</h4>
            <h1>{100}</h1>
          </Col>
          <Col span={3} style={{ background: '#ECECEC', padding: '30px', textAlign: 'center' }}>
            <h4><Icon type="team" theme="outlined" />在线账号数量</h4>
            <h1>{100}</h1>
          </Col><Col span={3} style={{ background: '#ECECEC', padding: '30px', textAlign: 'center' }}>
            <h4><Icon type="usergroup-delete" theme="outlined" />离线账号数量</h4>
            <h1>{100}</h1>
          </Col>
        </Row>
        <div style={{display:'flex',justifyContent:'space-around'}}>
          <Search
            placeholder="搜索微信账号"
            onSearch={value => console.log(value)}
            style={{ width: 400 }}
          />
          <Button type="primary" onClick={this.showModal}>编辑分组名称</Button>
          <Button type="primary" onClick={this.showModal}>编辑自动回复模板</Button>
          <Button type="primary" onClick={this.showModal}>编辑打招呼模板</Button>
          <Button type="primary" onClick={this.showModal}><Icon type="plus" theme="outlined" />添加设备</Button>
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
        <Row>
          <Col span={24}>
            <Table rowSelection={this.rowSelection} columns={this.columns} dataSource={this.data} />
          </Col>
        </Row>
      </div>
    )
  }
}
export default App