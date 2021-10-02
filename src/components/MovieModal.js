import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const MovieModal = () => {
    return (
        <div className="movie-modal shadow-lg">
            <div>Video</div>
            <div>Description</div>
            <div className="d-flex flex-column">
                <button className="btn btn-primary">Watch Now</button>
                <button className="btn btn-primary btn-fav">Add to Favourites <FontAwesomeIcon color="red" icon={faHeart}/> </button>
            </div>
        </div>
    )
}

export default MovieModal;
