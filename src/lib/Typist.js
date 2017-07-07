import React, { Component } from 'react';


class Typist extends Component {
  
  constructor(props) {
    super(props)
    this.delay =  this.props.delay ? this.props.delay : 150
    this.textToType = this.props.text ? this.props.text : 'undefined'
    this.state = {typed: '', iterations: 0, typoAt: this.getTypoPosition(this.textToType)}
  }

  getTypoPosition(toType) {
    const typoIndex = Math.floor(Math.random() * (toType.length - 1 - toType.length / 2) + toType.length / 2)
    return typoIndex
  }

  charToTypeo(index) {
    if (index === this.state.typoAt) {
      return this.textToType.substr(index + 1, 1)
    } else if (index === this.state.typoAt + 1) {
      return this.textToType.substr(index - 1, 1)
    } else {
      return this.textToType.substr(index, 1)
    }
  }

  printPart() {
    if (this.state.iterations <= this.textToType.length) {
      this.setState({
        typed: this.state.typed + this.charToTypeo(this.state.iterations),
        iterations: this.state.iterations + 1
      })
      setTimeout(() => this.printPart(), this.delay)
    } else if (this.state.typoAt > 0) {
      this.rollbackToTypo()
    } else {
      // the end
    }
  }

  rollbackToTypo() {
    if (this.state.iterations >= this.state.typoAt) {
      this.setState({
        typed: this.state.typed.substr(0, this.state.iterations),
        iterations: this.state.iterations - 1
      })
      setTimeout(() => this.rollbackToTypo(), this.delay)
    } else {
      this.setState({typoAt: -1, iterations: this.state.iterations + 1})
      this.printPart()
    }
  }

  componentDidMount() {
    this.fade()
    this.printPart()
  }

  fade() {
    setTimeout(() => {
      this.setState({showCursor: true})
      this.unfade()
    }, 500)
  }

  unfade() {
    setTimeout(() => {
      this.setState({showCursor: false})
      this.fade()
    }, 300)
  }

  render() {
    return (
      <div className='Typist'>
        {this.state.typed}
        <span style={this.state.showCursor ? {} : { display: 'none' }}>_</span>
      </div>
    );
  }
}

export default Typist;