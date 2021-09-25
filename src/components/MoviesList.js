/* eslint-disable react/style-prop-object */
import React from 'react';

const MoviesList = (props) => {
	//const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className="movie-div">
					<div className="overlay"></div>
					<img className="movie-item shadow" src={movie.Poster} alt='movie'></img>
				</div>
			))}
		</>
	);
};

export default MoviesList;