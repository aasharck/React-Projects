import React from "react";
import { useParams } from "react-router-dom";

function PlaceDetails(place) {
  const params = useParams();
  const name = params.name;
  let currPlace = place.eachPlace.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );
  return (
    <div className="container text-center">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={currPlace.src}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{currPlace.name}</h5>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;
