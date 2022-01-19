import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    let rand = Math.floor(Math.random() * 10);
    this.setState({
      num: rand,
    });
  }
  render() {
    return (
      <div>
        <h1>Number is {this.state.num}</h1>
        {this.state.num == "7" ? (
          <h1>"You Win!"</h1>
        ) : (
          <button onClick={this.handleClick}>Random Number</button>
        )}
      </div>
    );
  }
}

export default Clicker;
