import BackdropImage from "./MovieDetails/BackdropImage"
import Title from "./MovieDetails/Title"
import Subdetails from "./MovieDetails/Subdetails"
import Genres from "./MovieDetails/Genres"
import Rating from "./MovieDetails/Rating"
import Overview from "./MovieDetails/Overview"
import Cast from "./MovieDetails/Cast"
import Poster from "./MovieDetails/Poster"
import React from "react"
import "../css/MovieDetails.css"

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
              <Title
                title={movieInfo.title}
                releaseDate={movieInfo.release_date}
              />
              <Subdetails
                releaseDate={movieInfo.release_date}
                language={movieInfo.original_language}
                runtime={movieInfo.runtime}
              />
              <Genres genres={movieInfo.genres} />
              <Rating rating={movieInfo.vote_average} />
              <Overview overview={movieInfo.overview} />
              <Cast movieId={movieId} />
            </div>
            <Poster posterUrl={movieInfo.poster_path} />
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
