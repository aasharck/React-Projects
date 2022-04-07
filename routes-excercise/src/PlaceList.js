import { React, Component } from "react";
import './PlaceList.css';

class PlaceList extends Component {
  render() {
    return (
      <div className="container text-center">
                  <h1 className="display-2">Different Places</h1>
        <div className="row">
          {this.props.places.map((p) => (
            <div className="col-lg-4 col-md-4 place" key={p.name}>
              <img src={p.src} alt={p.name} />
              <h3>{p.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PlaceList;
