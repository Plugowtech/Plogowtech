import React from "react";
import "./Card.css";

const Card = ({ iconClass, title, value, colorClass }) => {
  return (
    <div className="card">
      <i className={`${iconClass} fa-2x ${colorClass}`}></i>
      <div className="card_inner">
        <p className="text-primary-p">{title}</p>
        <span className="font-bold text-title">{value}</span>
      </div>
    </div>
  );
};

export default Card;