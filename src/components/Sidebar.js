import React from "react"
import MoviePreview from "./MoviePreview"
import Searchbar from "./Searchbar"
import { List } from "@mui/material"
import moviesRaw from "../movies.json"
const moviesDefault = moviesRaw.results

export default function Sidebar({ selectedState }) {
  const [movies, setMovies] = React.useState(moviesDefault)
  return (
    <div>
      <div>
        <Searchbar movies={movies} setMovies={setMovies} />
      </div>
      <List sx={{ width: "30%", bgcolor: "background.paper" }}>
        {movies.map((movie) => (
          <MoviePreview
            key={movie.id}
            movie={movie}
            selectedState={selectedState}
          />
        ))}
      </List>
    </div>
  )
}
