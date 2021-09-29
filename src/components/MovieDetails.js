import React from "react"
import moviesRaw from "../movies.json"
const moviesDefault = moviesRaw.results

export default function MovieDetails({ movieId }) {
  return (
    <div>
      {movieId
        ? moviesDefault.find((movie) => movie.id === movieId).title
        : "Please select a movie."}
    </div>
  )
}
