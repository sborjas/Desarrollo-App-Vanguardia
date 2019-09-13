import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import List from './components/List';
import {AppBar, Typography, Toolbar} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

class App extends React.Component{

  state={
    heroes: []
  }

  componentDidMount() {
    axios.get('./heroes.json')
   .then((res)=>{
     const heroes = res.data;
     this.setState({
       heroes
     })
     console.log(res.data);
   }).catch((err)=>{
     console.log(err);
   })
    console.log('done');
  }

  render(){
    const {classes} = this.props;
    const {heroes} = this.state;
    return (
      <div>
        <AppBar className={classes.NavColor} position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" component="p">
            Super Heroe App
            </Typography>
          </Toolbar>
        </AppBar>
      <List heroes = {heroes} />   

      </div>

    );
  }
}

export default withStyles({
NavColor:{
  backgroundColor: '#5091fa'
}
})(App);
