[![Build Status](https://travis-ci.org/un0rsk/not-so-human-typist.svg?branch=master)](https://travis-ci.org/un0rsk/not-so-human-typist)

[Demo](http://un0rsk.github.io/not-so-human-typist)

### Installation

    npm install @un0rsk/not-so-human-typist

### Usage

    import React, { Component } from 'react';
    import './App.css';
    import Typist from './Typist';

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


## Background

Inspired by [Anders Lemke's post](https://medium.com/@anderslemke/delivering-slow-news-faster-add6bf87e3ee)