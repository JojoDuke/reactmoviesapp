import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
//import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const MoviesList = (props) => {
	//const FavouriteComponent = props.favouriteComponent;

	const movieSplide = props.movies.map((movie, index) => {
		return(
			<SplideSlide>
			<div className="movie-div">
						<div className="overlay"></div>
						<img 
							className="movie-item shadow" 
							src={movie.Poster} 
							alt='movie'></img>
			</div>
			</SplideSlide>
		);
	});

	return(
        <Splide options={{
            rewind: false,
            autoWidth: true,
            perPage: 6,
            perMove: 2,
			pagination: false,
			gap: '1em',
            focus: 'center',
            type: 'slide',
            easing: 'ease',
			arrows: true
        }}>
            {movieSplide}
		</Splide>
	);
};

export default MoviesList;