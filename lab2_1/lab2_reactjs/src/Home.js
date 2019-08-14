import React from 'react';
import logo from './home.jpg';
import Detail from './Detail.js';
import './Home.css';

class Home extends React.Component{

  constructor(props){
    super(props);
    // this.state = {title: "Laboratorio"};
    // this.revert = this.revert.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.state ={
      newStudentName: '',
      newStudentLastName:'',
      students: [
        {name: 'Jhon', lastName: 'Snow'},
        {name: 'Tyrion', lastName: 'Lannister'}
      ]
    };
  }

  // revert(){
  //   this.setState({title:"Aplicaciones de Vanguardia"})
  // }

  handleChange(stateName,event){
    console.log(event);
    console.log(stateName);
    this.setState({ [stateName]: event.target.value});
    
  }

  saveItem(){
    const newStudent = {
      name: this.state.newStudentName,
      lastName: this.state.newStudentLastName
    };
    this.setState({
      students:[ ...this.state.students, newStudent]
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}  alt="logo" /> 
          {/* <h1>Hallo, {this.state.title}</h1>
          <button onClick={this.revert}>Change Me!</button>
          <Detail detailTitle={this.state.title} detailValue={2}/> */}
          <h1> HELLO STATESS</h1>
          <div>
            <input
              value={this.state.newStudentName}
              onChange={(e) => this.handleChange('newStudentName',e)}
            />

            <input 
              value={this.state.newStudentLastName}
              onChange={(e) => this.handleChange('newStudentLastName',e)}
            />

            <button onClick={this.saveItem}> Add to Array</button>
          </div>                
        </header>        
      </div>
    );
  }
}

export default Home;
