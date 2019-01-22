import React from 'react';
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
          name={friends[0].name}
          image={friends[0].image}
          imdb={friends[0].imdb}
          genre={friends[0].genre}
        />
        <MovieCard
          name={friends[1].name}
          image={friends[1].image}
          imdb={friends[1].imdb}
          location={friends[1].location}
        />
        <MovieCard
          name={friends[2].name}
          image={friends[2].image}
          imdb={friends[2].imdb}
          genre={friends[2].genre}
        />
        <MovieCard
          name={friends[3].name}
          image={friends[3].image}
          imdb={friends[3].imdb}
          genre={friends[3].genre}
        />
        <MovieCard
          name={friends[4].name}
          image={friends[4].image}
          imdb={friends[4].imdb}
          genre={friends[4].genre}
        />
        <MovieCard
          name={friends[5].name}
          image={friends[5].image}
          imdb={friends[5].imdb}
          genre={friends[5].genre}
        />
        <MovieCard
          name={friends[6].name}
          image={friends[6].image}
          imdb={friends[6].imdb}
          genre={friends[6].genre}
        />
        <MovieCard
          name={friends[7].name}
          image={friends[7].image}
          imdb={friends[7].imdb}
          genre={friends[7].genre}
        />
        <MovieCard
          name={friends[8].name}
          image={friends[8].image}
          imdb={friends[8].imdb}
          genre={friends[8].genre}
        />
        <MovieCard
          name={friends[9].name}
          image={friends[9].image}
          imdb={friends[9].imdb}
          genre={friends[9].genre}
        />
        <MovieCard
          name={friends[10].name}
          image={friends[10].image}
          imdb={friends[10].imdb}
          genre={friends[10].genre}
        />
        <MovieCard
          name={friends[11].name}
          image={friends[11].image}
          imdb={friends[11].imdb}
          genre={friends[11].genre}
        />
      </Wrapper>
    </React.Fragment>
    
  );
}

export default App;