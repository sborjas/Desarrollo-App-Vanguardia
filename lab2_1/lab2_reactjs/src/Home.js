import React from 'react';
import logo from './home.jpg';
import Detail from './Detail.js';
import './Home.css';

class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {title: "Laboratorio"};
    this.revert = this.revert.bind(this);
  }

  revert(){
    this.setState({title:"Aplicaciones de Vanguardia"})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}  alt="logo" /> 
          <h1>Hallo, {this.state.title}</h1>
          <button onClick={this.revert}>Change Me!</button>
          <Detail detailTitle={this.state.title} detailValue={2}/>
                
        </header>

        
      </div>
    );
  }
}

export default Home;
