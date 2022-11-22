import React from "react";
import "./hometab.css";
const Hometab = () => {
  return (
    <div className="weather-container">
      <div className="home-container">
        <div className="location-name">Udupi,Karnataka</div>
        <div className="add-fav">
          <div className="fav-img">
            <img
              src={require("../../assests/icon_favourite.png")}
              alt="favimg"
              className="heart-img"
            />
          </div>
          <div className="fav-text">Add to Favourite</div>
        </div>
      </div>
    </div>
  );
};

export default Hometab;
