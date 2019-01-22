import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>IMDB Score:</strong> {props.imdb}
          </li>
          <li>
            <strong>Genre:</strong> {props.genre}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
