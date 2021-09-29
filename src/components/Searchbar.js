import React from "react"
import moviesRaw from "../movies.json"
const moviesDefault = moviesRaw.results

export default function Searchbar({ setMovies }) {
  const [movieName, setMovieName] = React.useState("")

  React.useEffect(() => {
    setMovies(
      moviesDefault.filter((movie) => {
        return movie.title.toLowerCase().includes(movieName.toLowerCase())
      })
    )
  }, [movieName, setMovies])

  function handleChange(e) {
    e.preventDefault()
    setMovieName(e.target.value)
  }
  return (
    <div>
      <input type="text" value={movieName} onChange={handleChange} />
    </div>
  )
}
