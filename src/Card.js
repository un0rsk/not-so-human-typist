import React, { Component } from 'react';


class Card extends Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>lalalala {this.props.name}</h1>
      </div>
    );
  }
}

export default Card;