import reactDom from "react-dom";
import React from 'react';
const person = (props)=>{
    return <p>Its inside the person name is {props.name} i am {props.age} age and job is {props.job}</p>

};

export default person;