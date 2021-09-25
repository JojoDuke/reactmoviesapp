import React from 'react';

const MoviesList = (props) => {
	//const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className=''>
					<img src={movie.Poster} alt='movie'></img>
				</div>
			))}
		</>
	);
};

export default MoviesList;