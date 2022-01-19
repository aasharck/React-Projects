import React, { Component } from "react";
import { Link } from "react-router-dom";

class Biscuits extends Component {
  render() {
    return (
      <div>
        <h1>Order Biscuits</h1>
        <Link to="/">Go Back</Link>
        <img src="https://www.bigbasket.com/media/uploads/p/l/1201305_2-britannia-nutrichoice-digestive-high-fibre-biscuits-family-pack.jpg" />
      </div>
    );
  }
}

export default Biscuits;
