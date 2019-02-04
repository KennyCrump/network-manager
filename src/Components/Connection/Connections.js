import React, { Component } from "react";
import axios from "axios";
import ConnectionMini from "./ConnectionMini";
import Modal from "../HOC/Modal";
import AddConnection from "./AddConnection";
import "./Connections.scss";
import { Icon } from 'semantic-ui-react'


class Connections extends Component {
  constructor(props) {
    super(props);
    this.state = {
        connectionsList: [],
        addModalToggle: false,
        optionsToggle: false,
    };
  }
  componentDidMount() {
    axios.get("/api/connections").then(res => {
      this.setState({ connectionsList: res.data });
    });
  }
  updateList =(newList) => {
      this.setState({connectionsList: newList})
  }
  openOptionsMenu = (e) => {
    const {optionsToggle} = this.state
    this.setState({optionsToggle: !optionsToggle})
    e.stopPropagation()
  }
  render() {
    const {connectionsList, addModalToggle, optionsToggle} = this.state
    
    const connectionsDisplay = connectionsList.map(connection => (
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
            <span className="left-right"></span>
            <span className="left-right left-right-border"></span></div>
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
