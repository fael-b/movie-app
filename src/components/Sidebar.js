import React from "react"
import MoviePreview from "./MoviePreview"
import Searchbar from "./Searchbar"
import moviesRaw from "../movies.json"
const moviesDefault = moviesRaw.results

export default function Sidebar({ select }) {
  const [movies, setMovies] = React.useState(moviesDefault)
  return (
    <div>
      <div>
        <Searchbar movies={movies} setMovies={setMovies} />
        {movies.map((movie) => (
          <MoviePreview key={movie.id} movie={movie} select={select} />
        ))}
      </div>
    </div>
  )
}
