/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import MoviesList from "./components/MoviesList";
import ListHeading from './components/ListHeading';
import { SearchBox } from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import MainMovie from './components/MainMovie';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const API_KEY = "91d62f4"; // OMdb API Key

  // Padding Function
  function pad(number, length) {
    var str = '' + number;
    while(str.length < length) {
      str = '0' + str;
    }
    return str;
  }
  
  // Get random movie ID
  const randomID = pad(Math.floor((Math.random() * 2155529) + 1), 7);
  const movieID = "tt" + randomID;
  const url = `http://www.omdbapi.com/?i=${movieID}&apikey=${API_KEY}`;

  const getMovies = async () => {
    try {
      const response = await fetch(url);
        const data = await response.json();
        const arr = [data];

        for(let i = 0; i < 10; i++){
          arr.push(data);
        }

        setMovies(arr);
    } catch (e) {
        console.error(e.toString);
    } 
  }
  
  // FUNCTIONS
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
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
    <div>
      {/* Navigation Bar */}
      <div>
        <Navbar />
      </div>

      <div className="row d-flex align-items-center mb-5">

        {/* Main Movie Area */}
        <MainMovie/>

        {/* <SearchBox 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}/> */}
      </div>

      {/* Movies List */}
      <ListHeading heading="Trending" />
      <div>
        <MoviesList
          key={movies.imdbID} 
          movies={movies} 
          handleFavouritesClick={addFavouriteMovie} 
          favouriteComponent={AddFavourites}/>
      </div>

      {/* List 2 */}
      <div className="row d-flex align-items-center mt-4 mb-4">
        <ListHeading heading="Cinetime Originals" />
      </div>
      <div>
        <MoviesList 
          movies={movies} 
          handleFavouritesClick={addFavouriteMovie} 
          favouriteComponent={AddFavourites}/>
      </div>

      {/* List 3 */}
      <div className="row d-flex align-items-center mt-4 mb-4">
        <ListHeading heading="Classics" />
      </div>
      <div>
        <MoviesList 
          movies={movies} 
          handleFavouritesClick={addFavouriteMovie} 
          favouriteComponent={AddFavourites}/>
      </div>

      <Footer />
    </div>
  );
};

export default App;
