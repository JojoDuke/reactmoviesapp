/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'

const MainMovie = () => {
    const [main] = useState(
        [
            {"Title":"Guardians of the Galaxy Vol. 2","Year":"2017","Rated":"PG-13","Released":"05 May 2017","Runtime":"136 min","Genre":"Action, Adventure, Comedy","Director":"James Gunn","Writer":"James Gunn, Dan Abnett, Andy Lanning","Actors":"Chris Pratt, Zoe Saldana, Dave Bautista","Plot":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 15 wins & 58 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"67/100"}],"Metascore":"67","imdbRating":"7.6","imdbVotes":"608,202","imdbID":"tt3896198","Type":"movie","DVD":"22 Aug 2017","BoxOffice":"$389,813,101","Production":"Marvel Studios, Walt Disney Pictures","Website":"N/A","Response":"True"}
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
