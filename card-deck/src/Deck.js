import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css"
const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, cards: [] };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    let cards = await axios.get(`${API_BASE_URL}/new/shuffle`);
    this.setState({ deck: cards.data });
  }

  async getCard() {
    let id = this.state.deck.deck_id;
    
    
    try{
        let CARD_URL = `${API_BASE_URL}/${id}/draw/`;
    let cards = await axios.get(CARD_URL);
    if(!cards.data.success){
        throw new Error("No card Remaining")
    }
    let cardData = cards.data.cards[0];
    this.setState((st) => ({
      cards: [...st.cards, {
        id: cardData.code,
        img: cardData.image,
        name: `${cardData.value} of ${cardData.suit}`
      }],
    }));
  } catch(err){
    alert(err);
  }
    
}

  render() {
      let Allcard = this.state.cards.map(c => (
        <Card key={c.id} image={c.img} alt={c.name}/>
      ))
    return (
      <div>
        <h1>Card Deck</h1>
        <button onClick={this.getCard}>Get Card</button>
        <div className="Deck-cardarea">{Allcard}</div>
      </div>
    );
  }
}

export default Deck;
