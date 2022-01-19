import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numb: ["one", "two", "three", "four", "five", "six"],
    val:5
  };
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    let dieFace = `Die fas fa-dice-${
      this.props.numb[this.props.val - 1]
    } fa-5x `;
    if (this.props.locked) dieFace += "Die-locked ";
    if (this.props.rolling && !this.props.locked) dieFace += "Die-rolling";
    return <i className={dieFace} onClick={this.handleClick} />;
  }
}

export default Die;
