import React, { Component } from 'react';
import { Radio, Modal, Button, Icon } from 'antd';

const RadioGroup = Radio.Group;

class App extends Component {
  state = {
    visible: false ,
    value: 1,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render(){
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <div>
        <Button type="primary" onClick={this.props.newTask} style={{float:'right',marginRight:'100px'}}>返回</Button>
        <h1>清粉任务</h1>
        <Button type="primary" onClick={this.showModal} style={{margin:'20px 0'}}>
          <Icon type="plus-circle" theme="outlined" /> 添加清粉账号
        </Button>
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
        <h2>批量清除僵尸粉</h2>
        <ul style={{color:'#4CAF50'}}>
          <li>一键无痕检测僵尸粉</li>
          <li>快 · 狠 · 准</li>
        </ul>
        <h2>设置方式</h2>
        <RadioGroup onChange={this.onChange} value={this.state.value} style={{marginBottom:'20px'}}>
          <Radio style={radioStyle} value={1}>修改备注（僵尸粉）</Radio>
          <Radio style={radioStyle} value={2}>直接删除</Radio>
        </RadioGroup >
        <div style={{textAlign:'center'}}>
          <Button type="primary">
            <Icon type="form" theme="outlined" /> 确认提交
          </Button>
        </div>
      </div>
    )
  }
}
export default App