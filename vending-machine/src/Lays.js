import React, { Component } from "react";
import { Link } from "react-router-dom";

class Lays extends Component {
  render() {
    return (
      <div>
        <h1>Order Lays</h1>
        <Link to="/">Go Back</Link>
        <img src="https://www.bigbasket.com/media/uploads/p/l/102753_9-lays-potato-chips-spanish-tomato-tango.jpg" />
      </div>
    );
  }
}

export default Lays;
