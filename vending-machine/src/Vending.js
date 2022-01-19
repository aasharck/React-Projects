import React, { Component } from "react";
import { Link } from "react-router-dom";

class Vending extends Component {
  render() {
    return (
      <div>
        <h1>Hi I am a Vending Machine</h1>
        <h2>What would you like to order?</h2>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/Lays">Lays</Link>
          </div>
          <div>
            <Link to="/Coke">Coke</Link>
          </div>
          <div>
            <Link to="/Biscuits">Biscuits</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Vending;
