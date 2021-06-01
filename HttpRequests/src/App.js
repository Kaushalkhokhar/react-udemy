import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMovies() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/film");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const trasformedData = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          release_date: movieData.release_date,
          openingText: movieData.opening_crawl,
        };
      });
      setMovieList(trasformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content = <p>Found no movies!</p>;

  if (movieList.length > 0) {
    content = <MoviesList movies={movieList} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading....</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
