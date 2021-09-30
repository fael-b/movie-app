import { Chip, List } from "@mui/material"
import BackdropImage from "./MovieDetails/BackdropImage"
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
      <BackdropImage backdropUrl={movieInfo?.backdrop_path} />
      {movieInfo ? (
        <div className="info-container">
          <div className="info-block">
            <h1 className="movie-title">
              {movieInfo.title ? movieInfo.title : "Unknown name"}
              {movieInfo.release_date ? (
                <span className="movie-release-date">
                  {` (${movieInfo.release_date.slice(0, 4)})`}
                </span>
              ) : (
                ""
              )}
            </h1>
            <h3 className="movie-subdetails">
              📅
              {movieInfo.release_date
                ? " " + movieInfo.release_date + "  "
                : " Unknown release date  "}
              ● 🗺️
              {movieInfo.original_language
                ? " " + movieInfo.original_language.toUpperCase() + "  "
                : " Unspecified origin  "}
              ● ⌛
              {movieInfo.runtime
                ? " " + movieInfo.runtime + " min  "
                : " Unknown runtime  "}
            </h3>
            <List>
              {movieInfo.genres ? (
                movieInfo.genres.map((genre) => (
                  <Chip
                    key={genre.id}
                    label={genre.name}
                    sx={{ marginLeft: "5px", marginBottom: "5px" }}
                  />
                ))
              ) : (
                <Chip label="Unknown genre" />
              )}
            </List>
            <h2 className="movie-rating">
              ⭐
              {movieInfo.vote_average
                ? movieInfo.vote_average
                : " No rating yet"}
            </h2>
            <h3 className="movie-overview-title">Overview</h3>
            <p className="movie-overview">
              {movieInfo.overview
                ? movieInfo.overview
                : "No overview available."}
            </p>
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
      ) : (
        <div className="cta-select">
          <h1>⏪ Please select a movie.</h1>
        </div>
      )}
    </div>
  )
}
