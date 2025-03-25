import React from "react";

const WeatherData = ({ day, conditions, time }) => {
  return (
    <div className="weather-data">
      <h2>{day}</h2>
      <p>
        <span>Conditions: </span> {conditions}
      </p>
      <p>
        <span>Time: </span> {time}
      </p>
    </div>
  );
};

export default WeatherData;
