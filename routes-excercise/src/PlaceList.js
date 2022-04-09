import { React, Component } from "react";
import { Link } from "react-router-dom";
import './PlaceList.css';

class PlaceList extends Component {
  render() {
    return (
      <div>
                  <h1 className="display-4 mt-4">Different Places</h1>
        <div className="row mt-5">
          {this.props.places.map((p) => (
            <div className="col-lg-4 col-md-4 place" key={p.name}>
              <Link to={`/places/${p.name}`}>
              <img src={p.src} alt={p.name} />
              <h3 className="mt-4">{p.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PlaceList;
