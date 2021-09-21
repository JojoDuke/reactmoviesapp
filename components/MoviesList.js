import React from 'react'

const MoviesList = (props) => {
    return (
        <div>
            {props.movies.map((movie, index) => (
                <div>
                    <img src="{ movie.Poster }" alt="movie" />
                </div>
            ))}
        </div>
    )
}

export default MoviesList
