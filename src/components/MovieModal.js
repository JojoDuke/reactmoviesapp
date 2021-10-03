import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import YoutubeEmbed from './YoutubeEmbed';

export const MovieModal = ({movies}) => {
    const ytKey = "AIzaSyBLggQmzLzEcuzZ4cJDFc-fCB-5T_PDAlE";

    return (
        <>
            {movies.map((movie, index) => (
                <div className="movie-modal shadow-lg">
                    <YoutubeEmbed embedId="rokGy0huYEA"/>
                    <div>{movie.Plot}</div>
                    <div className="d-flex flex-column justify-content-end">
                        <button className="btn btn-primary">Watch Now</button>
                        <button className="btn btn-primary btn-fav">Add to Favourites <FontAwesomeIcon color="red" icon={faHeart}/> </button>
                    </div>
                </div>
            ))};
        </>
    )
}

export default MovieModal;
