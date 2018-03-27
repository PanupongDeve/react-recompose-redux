import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Presentation = props => {
  return (
    <div className="App">
      <button onClick={props.handleSubEvent}>Sub</button>
      <div>{props.numberState}</div>
      <button onClick={props.handleAddEvent}>ADD</button>
      <br />
      <br />
      <button onClick={props.handleShowReduxMessage}>Test redux</button>
      <h1>{props.hello}</h1>
      <h1>{props.lifecycle}</h1>
    </div>
  );
};

export default Presentation;
