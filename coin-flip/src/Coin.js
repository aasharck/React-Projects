import React, { Component } from "react";

class Coin extends Component {
  render() {
    return <img src={this.props.imgg} alt={this.props.altt} />;
  }
}

export default Coin;