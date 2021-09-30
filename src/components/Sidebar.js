import React from "react"
import MoviePreview from "./MoviePreview"
import Searchbar from "./Searchbar"
import { List } from "@mui/material"
import "../css/Sidebar.css"
import moviesRaw from "../movies.json"
const moviesDefault = moviesRaw.results

export default function Sidebar({ selectedState }) {
  const [movies, setMovies] = React.useState(moviesDefault)
  return (
    <nav className="sidebar">
      <Searchbar setMovies={setMovies} />
      <List
        sx={{
          width: "100%",
          overflowY: "scroll",
          height: "calc(100% - 116px)",
          maxHeight: "calc(100% - 116px)",
        }}
      >
        {movies.map((movie) => (
          <MoviePreview
            key={movie.id}
            movie={movie}
            selectedState={selectedState}
          />
        ))}
      </List>
    </nav>
  )
}
