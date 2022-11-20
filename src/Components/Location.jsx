import React from "react";
import './Location.css'

function Location(props) {
    return (
      <div className="location-select">
        <div className="location-card">
          <img className="location-image" src={props.locationImage}></img>
          <h4 className="location-title">{props.locationTitle}</h4>
        </div>
      </div>

    )
}

export default Location