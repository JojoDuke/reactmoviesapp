import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import MoviesList from "./components/MoviesList";
import ListHeading from './components/ListHeading';
import { SearchBox } from './components/SearchBox';

const App = () => {
  //Set state
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // Request movies from API
  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=ce990560";
    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <ListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>

      <div className="row movie-app">
        <MoviesList movies={movies}/>
      </div>
    </div>
  );
};

export default App;
