import React, { Component } from "react";
import {
    withStyles,
    TextField,
    Button
} from "@material-ui/core"
import ACTIONS from "../modules/action";
import { connect } from "react-redux";


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });



class First extends Component {
  constructor() {
      super();
      this.state = {
          studentName: "",
          studentCode: ""
      };
  }

  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      });
  };

  

  render() {
    const {classes } = this.props;
    return (
      <div>
        <h1> THIRD!</h1>
        <TextField
            id="standard-name"
            label="Student Name"
            className={classes.textField}
            value=""
            onChange={this.handleChange}
            margin="normal"
        />
        <TextField
            id="standard-name"
            label="Student Code"
            className={classes.textField}
            value=""
            onChange={this.handleChange}
            margin="normal"
        />
      </div>
    );
  }
}

export default connect(
   
  )(withStyles(styles)(First));