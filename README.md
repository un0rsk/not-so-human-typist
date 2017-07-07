[![Build Status](https://travis-ci.org/un0rsk/not-so-human-typist.svg?branch=master)](https://travis-ci.org/un0rsk/not-so-human-typist)

[Demo](http://un0rsk.github.io/not-so-human-typist)

### Installation

    npm install not-so-human-typist --save

### Usage

    import React, { Component } from 'react';
    import './App.css';
    import Typist from 'not-so-human-typist';

    class App extends Component {
    render() {
        return (
        <div className="App">
                <Typist text='Hi there, I am Donna' delay='200'/>
        </div>
        );
    }
    }

    export default App;


## Styling

Simply define .Typist style

    .Typist {
    margin-top: 5%;
    font-size: 35pt;
    border-style: none;
    border-bottom-style: solid;
    -webkit-box-shadow:0;
    -moz-box-shadow:0;
    box-shadow:0;
    outline: none;
    font-family: 'Special Elite', cursive;
    }

## Background

Inspired by [Anders Lemke's post](https://medium.com/@anderslemke/delivering-slow-news-faster-add6bf87e3ee)