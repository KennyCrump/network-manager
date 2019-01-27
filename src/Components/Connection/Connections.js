import React, { Component } from "react";
import axios from "axios";
import ConnectionMini from "./ConnectionMini";
import './Connections.scss'
class Connections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connections: []
    };
  }
  componentDidMount() {
    axios.get("/api/connections").then(res => {
      this.setState({ connections: res.data });
    });
  }
  render() {
      console.log(this.state.connections)
    const connectionsDisplay = this.state.connections.map(connection => (
      <ConnectionMini key={connection.connection_id} {...connection} />
    ));

    return (
    <div className='connection-mini-wrapper'>
        {connectionsDisplay}
    </div>
    );
  }
}

export default Connections;
