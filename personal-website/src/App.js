// App.js

import React, { Component } from "react";
import Project from './components/project';
import './style.css'

class App extends Component {
  render() {
    return <div className="App">
      <h>Daniel Jang's Personal Portfolio</h>
      <h2> My projects</h2>
      <Project imageSrc="" desc="Lsdfsdfsd"></Project>
      </div>;
  }
}

export default App;