import React, { Component } from "react";
// import './App.css';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends: friends,
    points: 0,
    highScore: 0,
    guess: "Make a Guess"
  };

  selectMovie = (id, selectedAlready, index) => {
    const newFriends = this.state.friends;
    let newPoints = this.state.points;
    let highScoreNew = this.state.highScore;

    // if not selected before, add +1 to point, mark as selected
    if (!selectedAlready) {
      newPoints++;
      newFriends[index].selectedAlready = true;
      this.setState({ guess: "you guessed correctly" });
    }
    // selected before - game over. check top score, mark all as not selected and reset point total
    else {
      if (newPoints > this.state.highScore) {
        highScoreNew = newPoints;
      }
      this.setState({ highScore: highScoreNew, guess: "you guessed wrong" });
      newFriends.map(friend => (friend.selectedAlready = false)); //setting all chars to not selected
      newPoints = 0;
    }

    // randomizing order of characters
    for (let i = newFriends.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newFriends[i], newFriends[j]] = [newFriends[j], newFriends[i]];
      newFriends[i].index = i; // keeping track of new position in array
    }
    newFriends[0].index = 0;
    this.setState({ friends: newFriends, points: newPoints }); // setting state for new order of array and points
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Wrapper>
          Title title="Clicky" score={this.state.points} topscore=
          {this.state.topScore} guess={this.state.guess} />
          <div className="card header">
            {" "}
            <div className="cardBody">
              {" "}
              Click an image to earn points, but don't click on any more than once!
            </div>
          </div>
          {friends.map((friend, index) => {
            return (
              <MovieCard
                id={index}
                index={index}
                selectMovie={this.selectMovie}
                selectedAlready={friend.selectedAlready}
                image={friend.image}
              />
            );
          })}
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
