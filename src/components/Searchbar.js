import React from "react"
import { TextField } from "@mui/material"
import "../css/Searchbar.css"

export default function Searchbar({ setMovies }) {
  const [movieName, setMovieName] = React.useState("")

  React.useEffect(() => {
    if (movieName) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=49abe0e8aeaa4e8f9ff7476817dee548&query=${movieName}&page=1`
      )
        .then((res) => res.json())
        .then((movieList) => setMovies(movieList.results))
    }

    //setMovies(
    //  moviesDefault.filter((movie) => {
    //    return movie.title.toLowerCase().includes(movieName.toLowerCase())
    //  })
    //)
  }, [movieName, setMovies])

  function handleChange(e) {
    e.preventDefault()
    setMovieName(e.target.value)
  }
  return (
    <div className="search">
      <TextField value={movieName} onChange={handleChange} />
    </div>
  )
}
