import BackdropImage from "./MovieDetails/BackdropImage"
import React from "react"
import "../css/MovieDetails.css"
import MovieTitle from "./MovieDetails/MovieTitle"
import MovieSubdetails from "./MovieDetails/MovieSubdetails"
import MovieGenres from "./MovieDetails/MovieGenres"
import MovieRating from "./MovieDetails/MovieRating"
import MovieOverview from "./MovieDetails/MovieOverview"

export default function MovieDetails({ movieId }) {
  const [movieInfo, setMovieInfo] = React.useState()
  React.useEffect(() => {
    if (movieId) {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=49abe0e8aeaa4e8f9ff7476817dee548`
      )
        .then((res) => res.json())
        .then((movie) => setMovieInfo(movie))
    }
  }, [movieId])

  return (
    <div className="details-container">
      {movieInfo ? (
        <>
          <BackdropImage backdropUrl={movieInfo.backdrop_path} />
          <div className="info-container">
            <div className="info-block">
              <MovieTitle
                title={movieInfo.title}
                releaseDate={movieInfo.release_date}
              />
              <MovieSubdetails
                releaseDate={movieInfo.release_date}
                language={movieInfo.original_language}
                runtime={movieInfo.runtime}
              />
              <MovieGenres genres={movieInfo.genres} />
              <MovieRating rating={movieInfo.vote_average} />
              <MovieOverview overview={movieInfo.overview} />
            </div>
            <img
              className="movie-poster"
              src={
                movieInfo.poster_path
                  ? `https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`
                  : "/default_movie.png"
              }
              alt="movie poster"
            />
          </div>
        </>
      ) : (
        <div className="cta-select">
          <h1>⏪ Please select a movie.</h1>
        </div>
      )}
    </div>
  )
}
