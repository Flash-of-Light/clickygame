import React from "react";

function Navbar(props) {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">Favorite Movies Game</div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">Click an image to begin</li>
        </ul>
      </div>
      <div className="guess justify-content-center">
        <p id="guessMsg">{props.guess}</p>
      </div>
      <div className="justify-content-end guess">
        <span id="score">
          Score: {props.score} | Highscore: {props.highscore}{" "}
        </span>
      </div>
    </div>
  );
}

export default Navbar;