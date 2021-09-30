import React from "react"
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
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
  }, [movieName, setMovies])

  function handleChange(e) {
    e.preventDefault()
    setMovieName(e.target.value)
  }
  return (
    <div className="search">
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-start-adornment-search">
          Search for the name of a movie
        </InputLabel>
        <OutlinedInput
          id="outlined-start-adornment-search"
          type="text"
          value={movieName}
          onChange={handleChange}
          label="Search for the name of a movie"
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  )
}
