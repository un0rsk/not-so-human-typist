import React, { Component } from 'react';
import './App.css';
import Typist from './lib/Typist';

class App extends Component {
  render() {
    return (
      <div className="App">
			  <Typist name='Hi there, I am Donna'/>
      </div>
    );
  }
}

export default App;
