import React from 'react'

const MoviesList = (props) => {
    return (
        <div>
            {props.movies.map((movie, index) => (
                <div className="d-flex justify-content-start m-4">
                    <img src={movie.Poster} alt="movie" />
                </div>
            ))}
        </div>
    )
}

export default MoviesList;
