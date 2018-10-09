import React, { Component } from 'react';
import Info from './info'
import New from './new'

class App extends Component {
  state = {
    session: 'info',
  }
  changeSession = () => {
    if(this.state.session === "new"){
      this.setState({
        session: 'info',
      })
    } else {
      this.setState({
        session: 'new'
      })
    }
  }
  session =  () => {
    if(this.state.session === 'info' ){
      return (<Info newTask={this.changeSession} />)}
    else{
      return(<New newTask={this.changeSession} />)
    }
  }
  render(){
    return (
      <div>
        {this.session()}
      </div>
    )
  }
}

export default App