// src/componentes/ChartSection.jsx
import React from "react";
import Chart from "../charts/Chart";
import "./ChartSection.css";

const ChartSection = ({ title, location, iconClass }) => {
  return (
    <div className="charts__section">
      <div className="charts__section__title">
        <div>
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
        <i className={iconClass}></i>
      </div>
      <Chart />
    </div>
  );
};

export default ChartSection;