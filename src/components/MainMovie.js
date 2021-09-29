/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'

const MainMovie = () => {
    const [main] = useState(
        [
            {   
                "Title":"Shang-Chi and the Legend of the Ten Rings",
                "Year":"2021",
                "Rated":"PG-13",
                "Released":"03 Sep 2021",
                "Runtime":"132 min",
                "Genre":"Action, Adventure, Fantasy",
                "Director":"Destin Daniel Cretton",
                "Writer":"Dave Callaham, Destin Daniel Cretton, Andrew Lanham",
                "Actors":"Simu Liu, Awkwafina, Tony Chiu-Wai Leung",
                "Plot":"Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
                "Language":"Mandarin, English",
                "Country":"United States, Australia",
                "Awards":"N/A",
                "Poster":"https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
                "Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Metacritic","Value":"71/100"}],
                "Metascore":"71",
                "imdbRating":"8.0",
                "imdbVotes":"45,930",
                "imdbID":"tt9376612",
                "Type":"movie",
                "DVD":"N/A",
                "BoxOffice":"$94,672,848",
                "Production":"N/A",
                "Website":"N/A",
                "Response":"True"}
        ]);

    return (
        <>
            {main.map((movie, index) => (
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
