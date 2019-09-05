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

  const mapStateToProps = state => ({
    className: state.className,
    classCode: state.classCode

});
  
const mapDispatchToProps = dispatch => ({
    createClass: (className,classCode) => dispatch(ACTIONS.createClass(className,classCode))
});


class Second extends Component {
  constructor() {
      super();
      this.state = {
          className: "",
          classCode: ""
      };
  }

  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      });
  };

  handleSubmit = event => {
    // console.log(this.state.item);
    this.setState({ className: "",classCode:"" });
    if (this.state.className !== "" && this.state.classCode !== "") {
      // add the item to the store
      this.props.createClass(this.state.className, this.state.classCode);
    }
    event.preventDefault();
  };

  

  render() {
    const {classes } = this.props;
    return (
      <div>
        <h1> SECOND!</h1>
        <TextField
            id="standard-name"
            label="Class Name"
            name="className"
            className={classes.textField}
            value={this.state.className}
            onChange={this.handleChange}
            margin="normal"
        />
        <TextField
            id="standard-name"
            label="Class Code"
            name="classCode"
            className={classes.textField}
            value={this.state.classCode}
            onChange={this.handleChange}
            margin="normal"
        />

        <Button type="submit" variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
            Save
        </Button>
      </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Second));