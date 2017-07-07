import React, { Component } from 'react';
import './App.css';
import Typist from './lib/Typist';

class App extends Component {
  render() {
    return (
      <div className="App">
			  <Typist text='Hi there, I am Donna' delay='200'/>
        Refresh the page and it'll happen again ;)
      </div>
    );
  }
}

export default App;
