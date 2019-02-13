import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import Feed from "./components/Feed";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Feed />
      </div>
    );
  }
}

export default App;
