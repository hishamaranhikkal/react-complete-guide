import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

import { render } from '@testing-library/react';
const App = props =>{
  const[personState,setPersonState]= useState({
        person:[
          {name:"hisham1", age:40,job:"django student"},
          {name:"afam1", age:50,job:"python student"},
          {name:"shilpa1", age:60,job:"react student"}
        ]
    });
    const swicthNameHandler = () =>{
      // console.log("button clicked from switch handler function");
      setPersonState({
        person:[
          {name:"hisham1 from function", age:40,job:"django student from function"},
          {name:"afam1 from function", age:50,job:"python student from function"},
          {name:"shilpa1 from function", age:60,job:"react student from function"}
        ]
      });
    };
    // render(){
      return (
          <div className="App">
            <h1>react app is working</h1>
            <p>hey folks!!!</p>
            <Person name={personState.person[0].name} age={personState.person[0].age} job={personState.person[0].job}></Person>
            <p>person using times</p>
            <button onClick={swicthNameHandler}>Switch</button>
            <Person name={personState.person[1].name} age={personState.person[0].age} job={personState.person[1].job}></Person>
            <Person name={personState.person[2].name} age={personState.person[0].age} job={personState.person[2].job}></Person>
          </div>
        );
    
};

export default App;
