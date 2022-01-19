import React, { Component } from "react";
import './Pokecard.css'
const img ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <=999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component {
  render() {
    let src = `${img}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h4>{this.props.name}</h4>
        <img src={src} />
        <p>{this.props.type}</p>
        <p>{this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;
