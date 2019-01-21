import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import Login from './Components/Login/Login'
import axios from 'axios'

class App extends Component {
  state={
    loggedIn: false
  }
  componentDidMount(){
    axios.get('/auth/user').then(res => {
      if(res.data.user_id){
        this.setState({loggedIn: true})
      }else{
        this.setState({loggedIn:false})
      }
    })
  }
  login = (email, password) => {
    axios.post('/auth/login', {email, password}).then(res => {
        if(!res.data.user_id){
            alert(res.data.message)
        }else{
            this.setState({loggedIn : true})
        }
    })
}
logout = () => {
  axios.post('/auth/logout').then(res => {
    this.setState({loggedIn: false})
  })
}
  render() {
 const {loggedIn} = this.state
    return (
      <div className="App">
        {loggedIn ? 
        <Nav logout={this.logout}/>
        :
        <Login login={this.login}/>
        }
        {/* <Menu /> */}

      </div>
    );
  }
}

export default App;
