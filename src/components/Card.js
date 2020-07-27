import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img alt="food" src={props.src}></img>
      <h3>{props.name}</h3>
      <p>Time: {props.minutes} min</p>
      <a target="blank" href={props.link}>
        Go to source
      </a>
    </div>
  );
}

export default Card;
