import React from "react";
import { useParams, Link } from "react-router-dom";

function PlaceDetails(place) {
  const params = useParams();
  const name = params.name;
  let currPlace = place.eachPlace.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );
  return (

      <div className="place-details row justify-content-center">
        <div className="col-lg-5 col-11">
          <div
            className="place-details-card card mt-5"
            style={{ width: "18rem" }}
          >
            <img
              className="card-img-top"
              src={currPlace.src}
              alt="Card image cap"
            />
            <div className="card-body">
              <h3 className="card-title">{currPlace.name}</h3>
              <h6 className="card-subtitle text-muted">
                Photo by <b>{currPlace.by}</b>
              </h6>
            </div>
            <ul className="list-group list-group-flush">
              {currPlace.facts.map((fact, i) => (
                <li className="list-group-item" key={i}>
                  {fact}
                </li>
              ))}
            </ul>
            <div className="card-body">
              <Link to='/places' className="btn btn-info">Go Back
                </Link>
            </div>
          </div>
        </div>
      </div>

  );
}

export default PlaceDetails;
