/* eslint-disable react/style-prop-object */
import React from 'react'

const MainMovie = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                // eslint-disable-next-line react/style-prop-object
            <div className="bg-hero">
                    <img className="bg-image" src={movie.Poster} alt='movie'></img>

                <div className="m-xl-5 w-50 position-absolute text-white">
                    <h2 className="fw-bolder">{movie.Title}</h2>
                    <p>{movie.Plot}</p>
                    <p>{movie.Actors}</p>

                    {/* Watch Buttons */}
                    <div>
                        <button className="btn btn-lg watch-now">Watch Now</button>
                        <button className="btn btn-lg add-favourite">+</button>
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}

export default MainMovie;
