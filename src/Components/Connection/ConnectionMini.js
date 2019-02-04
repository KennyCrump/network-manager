import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
// import Modal from "../HOC/Modal";

class ConnectionMini extends Component {
  render() {
    const { first_name, last_name, company, last_contacted, position } = this.props;

    return (
      <div className="connection-mini">
        <div className="name-display">
          <Icon className="profile-icon" size="huge" name="user" />
          <div>
            <h3>{`${first_name} ${last_name}`}</h3>
            <h5>{company}</h5>
            <p>{position}</p>
          </div>
        </div>
        <div className="info-display">
          <p>
            Last Contacted: {last_contacted || `You haven't contacted this person yet.`}
          </p>
        </div>
      </div>
    );
  }
}

export default ConnectionMini;
