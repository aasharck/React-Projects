import React, { Component } from "react";
import "./Lottoball.css";

class Lottoball extends Component {
  render() {
    return <div className="Lottoball">{this.props.num}</div>;
  }
}

export default Lottoball;
