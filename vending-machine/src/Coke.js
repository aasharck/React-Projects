import React, { Component } from "react";
import { Link } from "react-router-dom";

class Coke extends Component {
  render() {
    return (
      <div>
        <h1>Order Coke</h1>
        <Link to="/">Go Back</Link>
        <img src="https://www.bigbasket.com/media/uploads/p/l/40018072_15-coca-cola-coke-zero-soft-drink-no-sugar.jpg" />
      </div>
    );
  }
}

export default Coke;
