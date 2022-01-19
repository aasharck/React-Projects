import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css"

class BoxContainer extends Component {
  static defaultProps = {
    numboxes: 18,
  };

  render() {
    const boxes = Array.from({ length: this.props.numboxes }).map(() => (
      <Box />
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer