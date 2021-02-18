import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

import { render } from '@testing-library/react';
class App extends Component{
  state={
      person:[
        {name:"hisham1", age:40},
        {name:"afam1", age:50},
        {name:"shilpa1", age:60}
      ]
  }
  render(){
  return (
    <div className="App">
      <h1>react app is working</h1>
      <p>hey folks!!!</p>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
      <p>person using times</p>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
    </div>
    );
}
}

export default App;
