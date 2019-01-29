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
    // selected befor, thus games is over. check for top score, mark all chars
    // as not selected and point total is reset.
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
          <MovieCard image={friends[0].image} />
          <MovieCard image={friends[1].image} />
          <MovieCard image={friends[2].image} />
          <MovieCard image={friends[3].image} />
          <MovieCard image={friends[4].image} />
          <MovieCard image={friends[5].image} />
          <MovieCard image={friends[6].image} />
          <MovieCard image={friends[7].image} />
          <MovieCard image={friends[8].image} />
          <MovieCard image={friends[9].image} />
          <MovieCard image={friends[10].image} />
          <MovieCard image={friends[11].image} />
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
