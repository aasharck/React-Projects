import React, { Component } from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "./Joke";
import { v4 as uuid } from "uuid";

class JokeList extends Component {
  static defaultProps = {
    totalJokes: 10,
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
    };
    this.seenJokes = new Set(this.state.jokes.map((j) => j.joke));
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }

  async getJokes() {
    try {
      let jokeArray = [];
      while (jokeArray.length < this.props.totalJokes) {
        let API_URL = await axios.get("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" },
        });
        let oneJoke = API_URL.data.joke;
        let isUnique = this.seenJokes.has(oneJoke.id);
        if (!isUnique) {
          jokeArray.push({ id: uuid(), joke: oneJoke, votes: 0 });
          let a = 0;
          console.log(a + 1);
        } else {
          console.log("DUPS");
          console.log(oneJoke);
        }
      }
      this.setState(
        (st) => ({
          loading: false,
          jokes: [...st.jokes, ...jokeArray],
        }),
        () =>
          window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
      );
    } catch (e) {
      alert(e);
      this.setState({ loading: false });
    }
  }

  handleVotes(id, delta) {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((j) =>
          j.id === id ? { ...j, votes: j.votes + delta } : j
        ),
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="spinner">
          <i className="far fa-8x fa-laugh fa-spin"></i>
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      );
    }
    let sortedJokes = this.state.jokes.sort((a,b) => b.votes - a.votes);
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">Jokes App</h1>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
          <button className="JokeList-getmore" onClick={this.handleClick}>
            Get More
          </button>
        </div>
        <div className="JokeList-jokes">
          {sortedJokes.map((res) => (
            <Joke
              key={res.id}
              joke={res.joke}
              votes={res.votes}
              upvote={() => this.handleVotes(res.id, 1)}
              downvote={() => this.handleVotes(res.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
