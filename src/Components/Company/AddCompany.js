import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class AddConnection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: "",
      logo: "",
      company: "",
      description: "",
      location: "",
      linkedin: "",
      website: ""
    };
  }
  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value
    });
  };

  addCompany = async () => {
    const { company_name, logo, description, location, linkedin, website} = this.state
    const res = await axios.post(`/api/company`, {company_name, logo, description, location, linkedin, website}
    );
    const newCompaniesList = res.data;
    console.log(newCompaniesList);
    await Swal.fire({
      type: "success",
      timer: 2500,
      title: "Contact Added",
      text: `${company_name} was successfully added to your network.`
    });
    if (this.props.updateList) {
      this.props.updateList(newCompaniesList);
    }
    if (this.props.close) {
      //If in a modal, it will close the modal
      this.props.close();
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="add-connection">
        <h1>Add a Company</h1>
        <div className="add-form">
          <TextField
            required
            label="Company Name"
            className={classes.textField}
            onChange={this.handleChange("company_name")}
            value={this.state.company_name}
            type="text"
          />
          <TextField
            label="Company Logo"
            className={classes.textField}
            onChange={this.handleChange("logo")}
            value={this.state.logo}
            type="text"
          />
          <TextField
            label="Company Description"
            className={classes.textField}
            onChange={this.handleChange("description")}
            value={this.state.description}
            type="text"
          />
          <TextField
            label="Company Location"
            className={classes.textField}
            onChange={this.handleChange("location")}
            value={this.state.location}
            type="text"
          />
          <TextField
            label="Company LinkedIn"
            className={classes.textField}
            onChange={this.handleChange("linkedin")}
            value={this.state.linkedin}
            type="text"
          />
          <TextField
            label="Company Website"
            className={classes.textField}
            onChange={this.handleChange("website")}
            value={this.state.website}
            type="text"
          />
          <Button
            variant="contained"
            color="primary"
            className="add-button"
            onClick={this.addCompany}
          >
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
export default withStyles(styles)(AddConnection);
