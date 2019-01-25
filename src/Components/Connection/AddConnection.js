import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {withRouter} from 'react-router-dom'
import 'sweetalert2/src/sweetalert2.scss'

class AddConnection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            company: '',
            relation: '',
            email: '',
            linkedin: '',
            dateAdded: ''
     }
    }
    handleChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
    }
    addConnection = async () => {
        const {name, company, relation, email, linkedin, dateAdded} = this.state
        const newConnection = await axios.post(`/api/connection`, {name, company, relation, email, linkedin, dateAdded})
        await Swal.fire(
            'Success',
            'Contact Saved',            
            'success'
          )
        this.props.history.push('/')

        
    }
    render() { 
        return ( 
        <div>
            <span>Name: </span><input onChange={(e) => this.handleChange('name' , e.target.value)} value={this.state.name} type="text"/><br/>
            <span>Company: </span><input onChange={(e) => this.handleChange('company' , e.target.value)} value={this.state.company} type="text"/><br/>
            <span>Relation: </span><input onChange={(e) => this.handleChange('relation' , e.target.value)} value={this.state.relation} type="text"/><br/>
            <span>Email: </span><input onChange={(e) => this.handleChange('email' , e.target.value)} value={this.state.email} type="text"/><br/>
            <span>LinkedIn Profile</span><input onChange={(e) => this.handleChange('linkedin' , e.target.value)} value={this.state.linkedin} type="text"/><br/>
            <span>When Was This Contact Made: </span><input onChange={(e) => this.handleChange('dateAdded' , e.target.value)} value={this.state.dateAdded} type="text"/>
            <button onClick={this.addConnection}>Add Contact</button>
        </div> );
    }
}
 
export default withRouter(AddConnection);