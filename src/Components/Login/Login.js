import React, { Component } from 'react'
import axios from 'axios'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
        }
    }
   
    login = () => {
        const {email, password} = this.state
        this.props.login(email, password)
    }
    render() { 
        return ( <div>
            <p>Email
                <input type="text" onChange={(e) => this.setState({email: e.target.value})}/>
                </p>
                <p>Password<input type="text" onChange={(e) => this.setState({password: e.target.value})}/></p>
            <button onClick={this.login}>Login</button>
        </div> );
    }
}
 
export default Login;