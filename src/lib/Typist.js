import React, { Component } from 'react';


class Typist extends Component {
  
  constructor(props) {
    super(props)
    this.delay =  this.props.delay ? this.props.delay : 150
    this.textToType = this.props.text
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
      this.setState({disabled: true})
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
    this.typist.focus();
    this.printPart()
  }

  render() {
    return (
      <div className='Typist'>
        <input ref={(i) => this.typist = i} type='text' value={this.state.typed} disabled={this.disabled}/>
      </div>
    );
  }
}

export default Typist;