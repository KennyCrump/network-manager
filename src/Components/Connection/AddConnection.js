import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import moment from "moment";

class AddConnection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      company: "",
      position: "",
      relation: "",
      email: "",
      linkedin: "",
      dateAdded: ""
    };
  }
  // handleChange = (prop, val) => {
  //     this.setState({
  //         [prop]: val
  //     })
  // }
  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value
    });
  };
  addConnection = async () => {
    const {
      first_name,
      last_name,
      company,
      position,
      relation,
      email,
      linkedin,
      dateAdded
    } = this.state;
    const res = await axios.post(`/api/connection`, {
      first_name,
      last_name,
      company,
      position,
      relation,
      email,
      linkedin,
      dateAdded
    });
    const newConnectionsList = res.data;
    console.log(newConnectionsList);
    await Swal.fire(
      "Success",
      "Contact Saved"
      // 'success'
    );
    if (this.props.updateList) {
      this.props.updateList(newConnectionsList);
    }
    if (this.props.close) {
      //If in a modal, it will close the modal
      this.props.close();
    }
    // this.props.history.push('/')
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="add-connection">
        <h1>Add a Connection</h1>
        <div className="add-form">


          <TextField
            required
            label="First Name"
            className={classes.textField}
            margin="dense"
            onChange={this.handleChange("first_name")}
            value={this.state.first_name}
            type="text"
          />
          <TextField
            required
            label="Last Name"
            className={classes.textField}
            margin="dense"
            onChange={this.handleChange("last_name")}
            value={this.state.last_name}
            type="text"
          />
          <TextField
            label="Company Name"
            className={classes.textField}
            onChange={this.handleChange("company")}
            value={this.state.company}
            type="text"
            autoComplete="false"
          />
          <TextField
            label="Connection's Position"
            className={classes.textField}
            onChange={this.handleChange("position")}
            value={this.state.position}
            type="text"
          />
          <TextField
            label="How Do You Know This Person?"
            multiline
            className={classes.textField}
            onChange={this.handleChange("relation")}
            value={this.state.relation}
            type="text"
          />
          <TextField
            id="date"
            label="When Was This Connection Made"
            type="date"
            defaultValue={moment().format("YYYY-MM-DD")}
            className={classes.textField}
            onChange={this.handleChange("dateAdded")}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="LinkedIn Profile"
            className={classes.textField}
            onChange={this.handleChange("linkedin")}
            value={this.state.linkedin}
            type="text"
          />
          <TextField
            label="Email"
            className={classes.textField}
            onChange={this.handleChange("email")}
            value={this.state.email}
            type="text"
          />
          <Button
            variant="contained"
            color="primary"
            className='add-button'
             onClick={this.addConnection}>
            Add Contact
          </Button>
        </div>
      </div>
    );
  }
}
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
    marginTop: 19
  }
});
export default withRouter(withStyles(styles)(AddConnection));
