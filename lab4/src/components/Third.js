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
    studentName: state.studentName,
    studentCode: state.studentCode,
    className: state.className,
    classCode: state.classCode

});
  
const mapDispatchToProps = dispatch => ({  
});


class Third extends Component { 

  render() {
    const {classes } = this.props;
    return (
      <div>
        <h1> THIRD!</h1>
        <TextField
          disabled
          id="outlined-disabled"
          label="Student Name"
          defaultValue="Student Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={this.props.studentName}
        />
        <TextField
            disabled
            id="outlined-disabled"
            label="Student Code"
            defaultValue="Student Code "
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={this.props.studentCode}
          />

          <TextField
            disabled
            id="outlined-disabled"
            label="Class Name"
            defaultValue="Class Name"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={this.props.className}
          />
        <TextField
            disabled
            id="outlined-disabled"
            label="Class Code"
            defaultValue="Class Code "
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={this.props.classCode}
          />
      </div>
    );
  }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
  )(withStyles(styles)(Third));