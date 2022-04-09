import { React, Component } from "react";
import { Route, Routes } from "react-router-dom";
import finland from "./images/finland.jpg";
import switzerland from "./images/switzerland.jpg";
import norway from "./images/norway.jpg";
import "./App.css";
import Navbar from "./Navbar";
import PlaceList from "./PlaceList";
import PlaceDetails from "./PlaceDetails";

class App extends Component {
  static defaultProps = {
    places: [
      {
        name: "Finland",
        by: "John",
        src: finland,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Switzerland",
        by: "Felipe",
        src: switzerland,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Norway",
        by: "Letty",
        src: norway,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <Navbar places={this.props.places} />
        <div className="container">
        <Routes>
          <Route
            exact="true"
            path="/places"
            element={<PlaceList places={this.props.places} />}
          />
          <Route
            exact="true"
            path="/places/:name"
            element={<PlaceDetails eachPlace={this.props.places} />}
          />
        </Routes>
        </div>
      </div>
    );
  }
}

export default App;
