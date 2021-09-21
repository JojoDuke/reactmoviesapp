import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import MoviesList from "./components/MoviesList";
import ListHeading from './components/ListHeading';
import { SearchBox } from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

const App = () => {
  //Set state
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  // Request movies from API
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}s&apikey=ce990560`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  };

  // FUNCTIONS
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites =JSON.parse(localStorage.getItem('react-movie-app-favourites'));
    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }
  // FUNCTIONS CLOSE

  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <ListHeading heading="Movies" />

        <SearchBox 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}/>
      </div>

      <div className="row movie-app">
        <MoviesList 
          movies={movies} 
          handleFavouritesClick={addFavouriteMovie} 
          favouriteComponent={AddFavourites}/>
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <ListHeading heading="Favourites" />
      </div>
      <div className="row movie-app">
        <MoviesList 
          movies={favourites} 
          handleFavouritesClick={removeFavouriteMovie} 
          favouriteComponent={RemoveFavourites}/>
      </div>
    </div>
  );
};

export default App;
