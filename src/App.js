import React, { Component } from "react";

import Movies from "./containers/Movies/Movies";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Movies />
      </div>
    );
  }
}

export default App;
