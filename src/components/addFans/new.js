import React, { Component } from 'react';
import { InputNumber, TimePicker, Row, Col, Radio, Input, Upload, message, Modal, Button, Icon } from 'antd';
import moment from 'moment';

const RadioGroup = Radio.Group;

class App extends Component {
  state = {
    visible: false ,
    value: 1,
    value2: 1,
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
  onChange2 = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value2: e.target.value,
    });
  }
  render(){
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const props = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    return (
      <div>
        <Button type="primary" onClick={this.props.newTask} style={{float:'right',marginRight:'100px'}}>返回</Button>
        <h1>加粉任务</h1>
        <Button type="primary" onClick={this.showModal} style={{margin:'20px 0'}}>
          <Icon type="plus-circle" theme="outlined" /> 添加加粉账号
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
        <h2>批量添加微信号</h2>
        <Upload {...props}>
          <Button style={{margin:'20px 0'}}>
            <Icon type="upload" /> 点击上传TXT文件
          </Button>
        </Upload>
        <h2>设置来源</h2>
        <RadioGroup onChange={this.onChange} value={this.state.value} style={{marginBottom:'20px'}}>
          <Radio style={radioStyle} value={1}>通过微信号搜索添加好友</Radio>
          <Radio style={radioStyle} value={2}>通过搜索手机号添加好友</Radio>
        </RadioGroup >
        <h2>设置验证申请</h2>
        <Input placeholder="请输入申请验证" style={{margin:'20px 0',width:'300px'}} />
        <h2>加粉任务设置</h2>
        <Row style={{marginBottom:'20px'}}>
          <Col span={4}>任务执行时间</Col>
          <Col span={20}><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} placeholder='开始时间' style={{marginRight:'20px'}} /><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} placeholder='结束时间' />（每日加粉任务在指定时间内执行）</Col>
        </Row>
        <Row style={{marginBottom:'20px'}}>
          <Col span={4}>提交申请间隔时长</Col>
          <Col span={20}><InputNumber min={0} max={100000} defaultValue={0} /><span style={{marginRight:'20px'}}>秒</span>（多个账号进行加粉任务时，为单个账号提交申请间隔时长）</Col>
        </Row>
        <Row style={{marginBottom:'20px'}}>
          <Col span={4}>单日提交申请最大限制</Col>
          <Col span={20}><InputNumber min={0} max={100000} defaultValue={0} /><span style={{marginRight:'20px'}}>个</span>（每个账号每天最多可提交的好友申请数，当添加粉丝超过最大值，顺延到次日）</Col>
        </Row>
        <Row style={{marginBottom:'20px'}}>
          <Col span={4}>请求模式</Col>
          <Col span={20}>
            <RadioGroup value={this.state.value2} onChange={this.onChange2}>
              <Radio value={1}>队列模式</Radio>
              <Radio value={2}>全部模式</Radio>
            </RadioGroup>
          </Col>
        </Row>
        <Row style={{marginBottom:'20px'}}>
          <Col span={4}>添加成功后打标签</Col>
          <Col span={20}><Input placeholder="添加标签" style={{width:'200px'}} /></Col>
        </Row>
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