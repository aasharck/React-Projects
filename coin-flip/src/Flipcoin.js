import React, { Component } from "react";
import Coin from "./Coin";
import { random } from "./Helper";

class Flipcoin extends Component {
  static defaultProps = {
    coins: [
      { sides: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { sides: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipper() {
    let choice = random(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: choice,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (choice.sides === "heads" ? 1 : 0),
        nTails: st.nTails + (choice.sides === "tails" ? 1 : 0)
      }
    });
  }

  handleClick() {
    this.flipper();
  }

  render() {
    return (
      <div>
        <h1>Let's Flip a Coin</h1>
        <Coin />
        <button onClick={this.handleClick}>Flip Mee</button>
        {this.state.currCoin && <Coin imgg={this.state.currCoin.imgSrc} altt={this.state.currCoin.sides}/>}
        <p>
          Out of {this.state.nFlips}, there have been {this.state.nHeads} Heads
          and {this.state.nTails} Tails
        </p>
      </div>
    );
  }
}

export default Flipcoin;
