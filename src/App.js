import React, { Component } from "react";
import './App.css';
import Wrapper from "./components/Wrapper";
import Reactstrap from "./components/Reactstrap";
import MovieCard from "./components/MovieCard";
import friends from "./friends.json";


function App() {
  return (
    <React.Fragment>
      <Reactstrap></Reactstrap>
      <Wrapper>
        <MovieCard
          image={friends[0].image}
        />
        <MovieCard
          image={friends[1].image}
        />
        <MovieCard
          image={friends[2].image}
        />
        <MovieCard
          image={friends[3].image}
        />
        <MovieCard
          image={friends[4].image}
        />
        <MovieCard
          image={friends[5].image}
        />
        <MovieCard
          image={friends[6].image}
        />
        <MovieCard
          image={friends[7].image}
        />
        <MovieCard
          image={friends[8].image}
        />
        <MovieCard
          image={friends[9].image}
        />
        <MovieCard
          image={friends[10].image}
          />
        <MovieCard
          image={friends[11].image}
          />
      </Wrapper>
    </React.Fragment>
    
  );
}

export default App;