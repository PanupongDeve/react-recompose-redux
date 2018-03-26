import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Presentation = (props) => {
  const Text = props.sayHello();
  return (
    <div className="App">
      <button onClick={props.handleSubEvent}>Sub</button>
      <div>{props.numberState}</div>  
      <button onClick={props.handleAddEvent}>ADD</button>
      <h1>{Text}</h1>    
    </div>
  );
}

export default Presentation;


