import React from "react";
import sunny from "../assets/Sunny.svg";

function WeatherCard({ data, title }) {
  return (
    <div className="card">
      {/* Conditionally render the title, if provided, above the weather icon */}
      {title && <h2 className="card-title">{title}</h2>}
      <div className="img-container">
        <img className="card-img-top" src={sunny} alt="Card image cap" id="icon" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{data.city}</h3>
        <h5 className="card-text">{data.temperature}°C</h5>
        <h5 className="card-text">{data.forecast}</h5>
      </div>
    </div>
  );
}

export default WeatherCard;
