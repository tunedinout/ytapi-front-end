import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import FlipCard from "./FlipCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlipCard frontContent="frontSide" backContent="backSide" />
      </div>
    );
  }
}

export default App;
