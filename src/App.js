/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import MoviesList from "./components/MoviesList";
import ListHeading from './components/ListHeading';
//import { SearchBox } from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
//import RemoveFavourites from './components/RemoveFavourites';
import MainMovie from './components/MainMovie';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieModal from './components/MovieModal';

const App = () => {
  const [movies] = useState(
    [
      {"Title":"The Lego Movie","Year":"2014","Rated":"PG","Released":"07 Feb 2014","Runtime":"100 min","Genre":"Animation, Adventure, Comedy","Director":"Christopher Miller, Phil Lord","Writer":"Phil Lord, Christopher Miller, Dan Hageman","Actors":"Chris Pratt, Will Ferrell, Elizabeth Banks","Plot":"An ordinary LEGO construction worker, thought to be the prophesied as \"special\", is recruited to join a quest to stop an evil tyrant from gluing the LEGO universe into eternal stasis.","Language":"English, Turkish","Country":"United States, Denmark, Australia","Awards":"Nominated for 1 Oscar. 72 wins & 67 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"83/100"}],"Metascore":"83","imdbRating":"7.7","imdbVotes":"334,798","imdbID":"tt1490017","Type":"movie","DVD":"17 Jun 2014","BoxOffice":"$257,760,692","Production":"LEGO System A/S, Lin Pictures, Vertigo","Website":"N/A","Response":"True"},
      {"Title":"Guardians of the Galaxy Vol. 2","Year":"2017","Rated":"PG-13","Released":"05 May 2017","Runtime":"136 min","Genre":"Action, Adventure, Comedy","Director":"James Gunn","Writer":"James Gunn, Dan Abnett, Andy Lanning","Actors":"Chris Pratt, Zoe Saldana, Dave Bautista","Plot":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 15 wins & 58 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"67/100"}],"Metascore":"67","imdbRating":"7.6","imdbVotes":"608,202","imdbID":"tt3896198","Type":"movie","DVD":"22 Aug 2017","BoxOffice":"$389,813,101","Production":"Marvel Studios, Walt Disney Pictures","Website":"N/A","Response":"True"},
      {"Title":"Spider-Man: Into the Spider-Verse","Year":"2018","Rated":"PG","Released":"14 Dec 2018","Runtime":"117 min","Genre":"Animation, Action, Adventure","Director":"Bob Persichetti, Peter Ramsey, Rodney Rothman","Writer":"Phil Lord, Rodney Rothman","Actors":"Shameik Moore, Jake Johnson, Hailee Steinfeld","Plot":"Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.","Language":"English, Spanish","Country":"United States","Awards":"Won 1 Oscar. 81 wins & 58 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"},{"Source":"Rotten Tomatoes","Value":"97%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.4","imdbVotes":"427,515","imdbID":"tt4633694","Type":"movie","DVD":"19 Mar 2019","BoxOffice":"$190,241,310","Production":"Sony Pictures Animation, Avi Arad, Pascal Pictures, Lord Miller","Website":"N/A","Response":"True"},
      {"Title":"The Lion King","Year":"2019","Rated":"PG","Released":"19 Jul 2019","Runtime":"118 min","Genre":"Animation, Adventure, Drama","Director":"Jon Favreau","Writer":"Jeff Nathanson, Irene Mecchi, Jonathan Roberts","Actors":"Donald Glover, Beyoncé, Seth Rogen","Plot":"After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.","Language":"English, Xhosa, Zulu, French, Spanish, Hindi","Country":"United States, United Kingdom, South Africa","Awards":"Nominated for 1 Oscar. 19 wins & 45 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.8/10"},{"Source":"Rotten Tomatoes","Value":"52%"},{"Source":"Metacritic","Value":"55/100"}],"Metascore":"55","imdbRating":"6.8","imdbVotes":"226,142","imdbID":"tt6105098","Type":"movie","DVD":"27 Aug 2019","BoxOffice":"$543,638,043","Production":"Fairview Entertainment","Website":"N/A","Response":"True"},
      {"Title":"Batman Forever","Year":"1995","Rated":"PG-13","Released":"16 Jun 1995","Runtime":"121 min","Genre":"Action, Adventure","Director":"Joel Schumacher","Writer":"Bob Kane, Lee Batchler, Janet Scott Batchler","Actors":"Val Kilmer, Tommy Lee Jones, Jim Carrey","Plot":"Batman must battle former district attorney Harvey Dent, who is now Two-Face and Edward Nygma, The Riddler with help from an amorous psychologist and a young circus acrobat who becomes his sidekick, Robin.","Language":"English","Country":"United States, United Kingdom","Awards":"Nominated for 3 Oscars. 10 wins & 26 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.4/10"},{"Source":"Rotten Tomatoes","Value":"38%"},{"Source":"Metacritic","Value":"51/100"}],"Metascore":"51","imdbRating":"5.4","imdbVotes":"241,349","imdbID":"tt0112462","Type":"movie","DVD":"22 Aug 1997","BoxOffice":"$184,069,126","Production":"Warner Brothers, PolyGram Filmed Entertainment","Website":"N/A","Response":"True"},
      {"Title":"Jumanji: The Next Level","Year":"2019","Rated":"PG-13","Released":"13 Dec 2019","Runtime":"123 min","Genre":"Action, Adventure, Comedy","Director":"Jake Kasdan","Writer":"Jake Kasdan, Jeff Pinkner, Scott Rosenberg","Actors":"Dwayne Johnson, Jack Black, Kevin Hart","Plot":"In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous","Language":"English","Country":"United States","Awards":"1 win & 12 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"},{"Source":"Rotten Tomatoes","Value":"71%"},{"Source":"Metacritic","Value":"58/100"}],"Metascore":"58","imdbRating":"6.7","imdbVotes":"213,765","imdbID":"tt7975244","Type":"movie","DVD":"13 Dec 2019","BoxOffice":"$320,314,960","Production":"Seven Bucks Productions, The Detective Agency, Matt Tolmach Productions","Website":"N/A","Response":"True"},
      {"Title":"Bloodshot","Year":"2020","Rated":"PG-13","Released":"13 Mar 2020","Runtime":"109 min","Genre":"Action, Drama, Sci-Fi","Director":"Dave Wilson","Writer":"Jeff Wadlow, Eric Heisserer, Kevin VanHook","Actors":"Vin Diesel, Eiza González, Sam Heughan","Plot":"Ray Garrison, a slain soldier, is re-animated with superpowers.","Language":"English, Persian","Country":"United States","Awards":"1 win & 7 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.7/10"},{"Source":"Rotten Tomatoes","Value":"30%"},{"Source":"Metacritic","Value":"44/100"}],"Metascore":"44","imdbRating":"5.7","imdbVotes":"68,491","imdbID":"tt1634106","Type":"movie","DVD":"24 Mar 2020","BoxOffice":"$12,561,824","Production":"Sony Pictures Entertainment, Mimran Schur Pictures, Cross Creek Pictures","Website":"N/A","Response":"True"},
      {"Title":"Solo: A Star Wars Story","Year":"2018","Rated":"PG-13","Released":"25 May 2018","Runtime":"135 min","Genre":"Action, Adventure, Sci-Fi","Director":"Ron Howard","Writer":"Jonathan Kasdan, Lawrence Kasdan, George Lucas","Actors":"Alden Ehrenreich, Woody Harrelson, Emilia Clarke","Plot":"Board the Millennium Falcon and journey to a galaxy far, far away in an epic action-adventure that will set the course of one of the Star Wars saga's most unlikely heroes.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 6 wins & 25 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.9/10"},{"Source":"Rotten Tomatoes","Value":"70%"},{"Source":"Metacritic","Value":"62/100"}],"Metascore":"62","imdbRating":"6.9","imdbVotes":"312,298","imdbID":"tt3778644","Type":"movie","DVD":"25 Sep 2018","BoxOffice":"$213,767,512","Production":"Lucasfilm Ltd.","Website":"N/A","Response":"True"}
    ]);
  const [favourites, setFavourites] = useState([]);

  //const API_KEY = "91d62f4"; // OMdb API Key

  // Padding Function
  // function pad(number, length) {
  //   var str = '' + number;
  //   while(str.length < length) {
  //     str = '0' + str;
  //   }
  //   return str;
  // }
  
  // Get random movie ID
  //const randomID = pad(Math.floor((Math.random() * 2155529) + 1), 7);
  //const movieID = "tt" + randomID;
  //const url = `http://www.omdbapi.com/?i=${movieID}&y=2020&apikey=${API_KEY}`;

  // const getMovies = async () => {
  //   try {
  //     const response = await fetch(url);
  //       const data = await response.json();
  //       const arr = [data];

  //       for(let i = 0; i < 10; i++){
  //         arr.push(data);
  //       }

  //       setMovies(arr);
  //   } catch (e) {
  //       console.error(e.toString);
  //   } 
  // }
  
  // FUNCTIONS

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
      </div>

      <MovieModal movies={movies}/>
      {/* Movies List */}
      <ListHeading heading="Trending" />
      <div>
        <MoviesList 
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
