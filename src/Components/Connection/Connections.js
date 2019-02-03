import React, { Component } from "react";
import axios from "axios";
import ConnectionMini from "./ConnectionMini";
import Modal from "../HOC/Modal";
import AddConnection from "./AddConnection";
import "./Connections.scss";
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import { Icon } from 'semantic-ui-react'


class Connections extends Component {
  constructor(props) {
    super(props);
    this.state = {
        addModalToggle: false,
        optionsToggle: false,
        connections: [],
    };
  }
  componentDidMount() {
    axios.get("/api/connections").then(res => {
      this.setState({ connections: res.data });
    });
  }
  updateList =(newList) => {
      this.setState({connections: newList})
  }
  openOptionsMenu = (e) => {
    const {optionsToggle} = this.state
    this.setState({optionsToggle: !optionsToggle})
    e.stopPropagation()
  }
  render() {
      const {addModalToggle, optionsToggle} = this.state
    console.log(this.state.addModalToggle);
    const connectionsDisplay = this.state.connections.map(connection => (
      <ConnectionMini key={connection.connection_id} {...connection} />
    ));

    return (
      <div className='connections' onClick={(e) => this.setState({optionsToggle: false})}>
        <div className='options-menu'>

              <Icon circular inverted name='add user' size='large' color='green'onClick={() => this.setState({addModalToggle: true})}/>
            <Icon circular inverted className='options-button' name='options' size='large' color='grey' onClick={(e) => this.openOptionsMenu(e)}/>
          { optionsToggle &&
            <div onClick={(e) => e.stopPropagation()} className="menu-choices-wrapper">
            <div className="menu-choices">
            <span class="left-right"></span>
            <span class="left-right left-right-border"></span></div>
            </div>
          }
        </div>
        
        <Modal open={addModalToggle} render={(close) => <AddConnection updateList={this.updateList} close={close}/>}
        closeModalFunc={() => this.setState({addModalToggle: false})} />
        <div className="connection-mini-wrapper">
            {connectionsDisplay}
        </div>
      </div>
    );
  }
}

export default Connections;
