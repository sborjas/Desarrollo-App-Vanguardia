import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import List from './components/List';
import AppNav from './components/AppNav'

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
    
    const {heroes} = this.state;
    return (
      <div>
      <AppNav/> 
      <List heroes = {heroes} />   

      </div>

    );
  }
}

export default App;
