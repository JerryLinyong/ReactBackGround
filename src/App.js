import React, { Component } from 'react';
import { Layout, Menu, Icon, Input, Avatar, Badge  } from 'antd';
import './App.css'
import List from './components/list/list'
import AddFans from './components/addFans/addFans'
import ClearFans from './components/clearFans/clearFans'
import GroupManage from './components/groupManage/groupManage'
import Config from './components/config/config'
import Scan from './components/scan/scan'
import Message from './components/message/message'
import Monent from './components/monent/monent'
import Comment from './components/comment/comment'
import FriednManage from './components/friednManage/friednManage'
import WxManage from './components/wxManage/wxManage'
import Response from './components/response/response'
import ServiceManage from './components/serviceManage/serviceManage'
import Info from './components/info/info'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Search = Input.Search;

class App extends Component {
  state = {
    session: 'clearFans',
    collapsed: false,
  }
  changeSession = (props) => {
    this.setState({
      session: props.key
    })
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render(){
    function Session (props) {
      const session = props.session
      if(session==='list'){
        return (<List />)
      } else if (session==='addFans') {
        return (<AddFans />)
      } else if (session==='clearFans') {
        return (<ClearFans />)
      } else if (session==='groupManage') {
        return (<GroupManage />)
      } else if (session==='config') {
        return (<Config />)
      } else if (session==='scan') {
        return (<Scan />)
      } else if (session==='message') {
        return (<Message />)
      } else if (session==='monent') {
        return (<Monent />)
      } else if (session==='comment') {
        return (<Comment />)
      } else if (session==='friednManage') {
        return (<FriednManage />)
      } else if (session==='wxManage') {
        return (<WxManage />)
      } else if (session==='response') {
        return (<Response />)
      } else if (session==='serviceManage') {
        return (<ServiceManage />)
      } else if (session==='info') {
        return (<Info />)
      }
    }
    let showStyle = {
      fontSize:'28px',verticalAlign:'middle',fontWeight:'bolder',marginLeft:'4px',color:'white',
      display:(this.state.collapsed)?'none':'inline-block'
    }
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >        
          <div style={{marginTop:'10px',height:'48px'}}>
            <img src={require('./logo.png')} style={{margin:'0 20px'}} alt='无法显示'></img>
            <span style={showStyle}>ECO</span>
          </div>                     
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['clearFans']}
            defaultOpenKeys={['account']}
            style={{ minHeight: 'calc(100vh - 58px)', borderRight: 0}}
          >
            
            <SubMenu key="account" title={<span><Icon type="user" />账号</span>} style={{marginTop: '20px' }}>
              <Menu.Item key="list" onClick={this.changeSession}>账号列表</Menu.Item>
            </SubMenu>
            <SubMenu key="friends" title={<span><Icon type="team" theme="outlined" />好友</span>}>
              <Menu.Item key="addFans" onClick={this.changeSession}>加粉任务</Menu.Item>
              <Menu.Item key="clearFans" onClick={this.changeSession}>清粉任务</Menu.Item>
            </SubMenu>
            <SubMenu key="group" title={<span><Icon type="solution" theme="outlined" />群</span>}>
              <Menu.Item key="groupManage" onClick={this.changeSession}>群管理</Menu.Item>
              <Menu.Item key="config" onClick={this.changeSession}>群主配置</Menu.Item>
              <Menu.Item key="scan" onClick={this.changeSession}>扫码进群</Menu.Item>
            </SubMenu>
            <SubMenu key="active" title={<span><Icon type="message" theme="outlined" />主动</span>}>
              <Menu.Item key="message" onClick={this.changeSession}>群发消息</Menu.Item>
              <Menu.Item key="monent" onClick={this.changeSession}>发朋友圈</Menu.Item>
              <Menu.Item key="comment" onClick={this.changeSession}>朋友圈评论</Menu.Item>
              <Menu.Item key="friednManage" onClick={this.changeSession}>朋友圈管理</Menu.Item>
            </SubMenu>
            <SubMenu key="system" title={<span><Icon type="customer-service" theme="outlined" />客服系统</span>}>
              <Menu.Item key="wxManage" onClick={this.changeSession}>微信管理</Menu.Item>
              <Menu.Item key="response" onClick={this.changeSession}>快捷回复</Menu.Item>
              <Menu.Item key="serviceManage" onClick={this.changeSession}>客服管理</Menu.Item>
              <Menu.Item key="info" onClick={this.changeSession}>信息展示</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '0px 20px' }}>
            <a>
              <Icon
                style={{fontSize:'20px'}}
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </a>
            <div style={{float:'right' ,width: '400px'}}>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200}}
              />
              <a>
                <Icon type="bell" theme="outlined" style={{margin:'0 30px'}} />
                <Badge count={5} offset={[-24,-16]}>
                  <span className="head-example" />
                </Badge>
              </a>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span>用户名</span>
            </div>
          </Header>
          <Content style={{ background: '#fff', padding: '0 50px 24px 50px', margin: 0, minHeight: 280 }}>
            <Session session={this.state.session} />
          </Content>
        </Layout>
      </Layout>
    )
  }  
}
export default App
